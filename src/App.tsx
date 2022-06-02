import Tippy from "@tippy.js/react";
import { forwardRef, LegacyRef } from "react";
import "tippy.js/dist/tippy.css";
import "./App.css";

const ColoredToolTip = () => {
  return <span style={{ color: "yellow" }}>Yellow</span>;
};

const renderList = () => {
  return (
    <ul style={{ fontSize: "1rem" }}>
      <li>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad totam
        excepturi qui quas vel deserunt? Similique fuga quod cum. Facere
        delectus est, quo dicta ipsum nobis consequatur mollitia corporis.
        Sapiente?
      </li>
      <li>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad totam
        excepturi qui quas vel deserunt? Similique fuga quod cum. Facere
        delectus est, quo dicta ipsum nobis consequatur mollitia corporis.
        Sapiente?
      </li>
      <li>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad totam
        excepturi qui quas vel deserunt? Similique fuga quod cum. Facere
        delectus est, quo dicta ipsum nobis consequatur mollitia corporis.
        Sapiente?
      </li>
    </ul>
  );
};

function App() {
  return (
    <div className="App">
      <Tippy arrow={false} content={renderList()}>
        <button>Hover Me !!!</button>
      </Tippy>

      <Tippy sticky duration={1000} content={<ColoredToolTip />}>
        <p>Hi there</p>
      </Tippy>
    </div>
  );
}

export default App;
