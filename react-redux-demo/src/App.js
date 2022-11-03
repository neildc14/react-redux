import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <HooksCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
