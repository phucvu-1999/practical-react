import { toast, ToastContainer, ToastTransition } from "react-toastify";
import { AiFillGithub } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const notify = () => {
    toast("Hello world !!!", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 10000,
    });

    toast.success("Hello world !!!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: false,
    });

    toast.error("Hello world !!!", {
      position: toast.POSITION.TOP_RIGHT,
    });

    toast.info("Hello world !!!", {
      position: toast.POSITION.TOP_LEFT,
    });

    toast.warn("Hello world !!!", {
      position: toast.POSITION.BOTTOM_CENTER,
    });

    toast.info("Hello world !!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="App">
      <button onClick={notify}>Show toastify</button>
      <ToastContainer />
    </div>
  );
}

export default App;
