import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RutasPublics from "./routes/RoutesPublics";
import { RutasProvider } from "./context/RutasContext";

function App() {
  return (
    <AuthProvider>
      <RutasProvider>
        <BrowserRouter>
          <main className="mx-auto">
            {/* Renderiza RutasPublics que maneja la lógica */}
            <RutasPublics />
          </main>
        </BrowserRouter>
      </RutasProvider>
    </AuthProvider>
  );
}

export default App;