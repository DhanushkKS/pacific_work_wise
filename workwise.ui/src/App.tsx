import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { Provider } from "react-redux";
import { store } from "./store";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";

function App() {
  const elements = useRoutes(routes);
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Provider store={store}>{elements}</Provider>
      </LocalizationProvider>
    </>
  );
}

export default App;
