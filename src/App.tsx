import "./App.css";
import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
function App() {
  const [isModalVisible, setModalIsVisible] = useState(false);

  return (
    <div className="App">
      <Modal
        onRequestClose={() => setModalIsVisible(!isModalVisible)}
        isOpen={isModalVisible}
      >
        <h2>Hello world</h2>
        <button onClick={() => setModalIsVisible(!isModalVisible)}>
          Toggle Modal
        </button>
      </Modal>

      <button onClick={() => setModalIsVisible(!isModalVisible)}>
        Toggle Modal
      </button>
    </div>
  );
}

export default App;
