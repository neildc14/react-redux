import "./App.css";
import ProductView from "./features/api/ProductView";
import SearchProduct from "./features/api/SearchProduct";
import CakeView from "./features/cake/CakeView";
import IceCreamView from "./features/icecream/IceCreamView";
import UserView from "./features/user/UserView";

function App() {
  return (
    <div className="App">
      {/* <CakeView />
      <IceCreamView />
      <UserView /> */}
      <SearchProduct />
      {/* <ProductView /> */}
    </div>
  );
}

export default App;
