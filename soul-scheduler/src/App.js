import {Routes} from "./routes";
import {AuthProvider} from "./contexts/AuthContext";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
