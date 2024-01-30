import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";

function App() {
  // Providing redux store to the entire app

  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
