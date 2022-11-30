// a modal custom component

export default function Modal({ modal, setModal }) {
  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
      setModal(false);
    }
  });
  return (
    <div className={modal ? "modal active" : "modal"}>
      <div className="modalContent">
        <div onClick={() => setModal(false)} className="close">
          X
        </div>
        <div className="modalHeader">
          <h2>Help</h2>
        </div>
        <div className="modalBody">
          <p>
            To use the console write "comands" in the input field and press
            enter. It will show the list of comands avaliables to know more
            about me.
            {":)"}
          </p>
        </div>
        <div className="modalFooter">
          <button onClick={() => setModal(!modal)}>Close</button>
        </div>
      </div>
    </div>
  );
}
