import {Login} from "./pages/Login";
import {Container} from "@material-ui/core";
import {AuthProvider} from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Container>
        <Login />
      </Container>
    </AuthProvider>
  );
}

export default App;
