import React from "react";
import sanitizeHtml from "sanitize-html";
import Data from "../data";
import AutoWrite from "./AutoWrite";

function Console() {
  const [consoleState, setConsoleState] = React.useState([
    'Welcome to my console resume, write "commands" on the console to see the avaliable commands.',
  ]);
  const style = {
    marginTop: "120px",
    padding: "20px 20px 90px 20px",
  };
  const inputStyle = {
    backgroundColor: "transparent",
    border: "0px",
    width: "100%",
  };
  const witeOnConsole = (text) => {
    const newState = [...consoleState];
    const lowCaseValue = text.value.toLowerCase();
    let response;
    if (lowCaseValue === "commands") {
      response = "The avaliable commands are: <br/>";
      Data.forEach((items) => (response += `${items.property} <br/>`));
    } else {
      Data.forEach(({ property, resp }) => {
        if (property === lowCaseValue) {
          response = resp;
        }
      });
    }

    if (response === undefined) {
      response = `The comand ${text.value} is not a know comand.<br/> You can write "commands" on the console to see the list of commands on screen.`;
    }
    const cleanValue = sanitizeHtml(text.value, {
      allowedTags: ["b", "i", "em", "strong", "a", "br", "p"],
      allowedAttributes: {
        a: ["href", "target"],
        p: ["class"],
      },
    });
    newState.push(cleanValue);
    newState.push(response);
    text.value = "";
    window.scrollTo(0, document.getElementsByTagName("body")[0].offsetHeight);
    setConsoleState(newState);
  };
  let last = "";
  React.useEffect(() => {
    document.getElementById("input-main").focus();
    window.addEventListener("keypress", () => {
      document.getElementById("input-main").focus();
    });
  });
  React.useEffect(() => {
    window.scrollTo(0, document.getElementsByTagName("body")[0].offsetHeight);
  }, [consoleState]);
  return (
    <div style={style} className="container">
      {consoleState.map((item, i) => {
        if (i === consoleState.length - 1) {
          return <AutoWrite text={item} />;
        } else {
          return (
            <p
              style={i % 2 === 0 ? { paddingLeft: "20px" } : {}}
              dangerouslySetInnerHTML={{ __html: item }}
            ></p>
          );
        }
      })}

      <input
        id="input-main"
        className="input-console"
        style={inputStyle}
        placeholder="_"
        type="text"
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            witeOnConsole(e.target);
          } else if (e.keyCode === 38) {
            last === "" ? (last = consoleState.length - 2) : (last -= 2);
            e.target.value = last >= 0 ? consoleState[last] : "";
            if (last < 0) {
              last = -1;
            }
          } else if (e.keyCode === 40) {
            last === "" ? (last = consoleState.length + 2) : (last += 2);
            e.target.value = last >= 0 ? consoleState[last] : "";
          }
          if (e.target.value === "undefined") {
            e.target.value = "";
            last = consoleState.length;
          }
        }}
      />
    </div>
  );
}

export default Console;
