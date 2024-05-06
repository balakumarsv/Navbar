import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import TaskBar from "./TaskBar";
import Project from "./Project";
import Client from "./Client";

function App() {
  const [navOpen, setNavOpen] = useState(true);

  const toggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <Router>
      <div className="main_div">
        {!navOpen && (
          <div className="top_barbefore">
            <button onClick={toggle} className="menu_bar">
              <IoMenu />
            </button>
          </div>
        )}

        <div className={`sidenav ${navOpen ? "open" : ""}`}>
          {navOpen && (
            <>
              <div className="top_bar">
                <h1>EMS</h1>
                <button onClick={toggle} className="cross_bar">
                  <RxCross2 />
                </button>
              </div>
              <div className="sticky">
                <Link to="/task_bar">TaskBar</Link>
                <Link to="/project">Projects</Link>
                <Link to="/client">Client</Link>
              </div>
            </>
          )}
        </div>
        <div className="content">
          <Routes>
            <Route path="/task_bar" element={<TaskBar />} />
            <Route path="/project" element={<Project />} />
            <Route path="/client" element={<Client />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
