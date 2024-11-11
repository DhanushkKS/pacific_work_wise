import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  const elements = useRoutes(routes);
  return (
    <>
      <Provider store={store}>{elements}</Provider>
    </>
  );
}

export default App;
