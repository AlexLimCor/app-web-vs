import { Header } from "./components/Layout/Header/Header";
import { Footer } from "./components/Layout/Footer/Footer";
import { AppRoutes } from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
