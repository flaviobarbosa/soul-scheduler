import {Container} from "@material-ui/core";
import {Routes} from "./routes";
import {AuthProvider} from "./contexts/AuthContext";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Container>
          <Routes />
        </Container>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
