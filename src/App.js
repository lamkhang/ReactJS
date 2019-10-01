import React from 'react';
import './App.css';
import BaiTap1 from "./components/BaiTap1/baitap1";
import {BaiTap2} from "./components/BaiTap2/baitap2";
import BaiTap3 from "./components/BaiTap3/baitap3";
import RenderingElements from "./rendering-elements/rendering-elements";
import HandlingEvents from "./handling-events/handling-event";
import ExampleEvent from "./handling-events/example-event";
import State from "./handling-events/state";
import BaiTapCar from "./handling-events/baitap-car";
import ListKeys from "./list-keys/list-keys";
function App() {
    return (
        <div>
            {/* <BaiTap1 /> */}
            {/* <BaiTap2 /> */}
            {/* <BaiTap3 /> */}
            {/* <RenderingElements /> */}
            {/* <HandlingEvents /> */}
            {/* <ExampleEvent /> */}
            {/* <State /> */}
            {/* <BaiTapCar /> */}
            <ListKeys />
        </div>

    );
}

export default App;
