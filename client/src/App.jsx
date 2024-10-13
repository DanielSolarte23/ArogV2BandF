import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RutasPublics from "./routes/RoutesPublics";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <main className="mx-auto">
          {/* Renderiza RutasPublics que maneja la lógica */}
          <RutasPublics />
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;