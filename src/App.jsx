import { useRoutes } from "react-router-dom";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import Router from "./Routes";

function App() {
  const router = useRoutes(Router);

  return (
    <div>
      <Sidebar />
      <main className="main-content p-6 xl:ml-72">
        <Header />
        {router}
        <Footer />
      </main>
    </div>
  );
}

export default App;
