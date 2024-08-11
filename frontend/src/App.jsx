import { Header } from "./components/Layout/Header/Header";
import { Footer } from "./components/Layout/Footer/Footer";
import { AppRoutes } from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
