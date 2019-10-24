import * as React from "react";
import * as ReactDOM from "react-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import baseStyles from './styles/index'
import App from "./components/App";


const render = () => {
  baseStyles()

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("app")
  );
}

render()

