import "./styles/App.css";
import Sidebar from "./components/sidebar/Sidebar";
import TopBar from "./components/topbar/TopBar";
// Pages
import Home from "./pages/home/Home";

function App() {

  return (
    <div className="container">
      <Sidebar />
      <div className="wrapper">
        <TopBar />
        <div className="wrapper-container">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
