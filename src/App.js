import { useState } from "react";
import "./App.css";
import Console from "./components/Console";
import Modal from "./components/Modal";

function App() {
  const [modalstate, setModal] = useState(false);

  return (
    <div className="App">
      <div onClick={() => setModal(!modalstate)} className="helpText">
        ?
      </div>
      <Modal modal={modalstate} setModal={setModal} />
      <Console />
    </div>
  );
}

export default App;
