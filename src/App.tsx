import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { lazy, Suspense } from "react";
import "./Styles/Home.css";
import "./Styles/Login.css";
import "./Styles/Register.css";
import "./Styles/ComponentsStyle/Nav.css";
import "./Styles/ComponentsStyle/Aside.css";
import "./Styles/ComponentsStyle/Post.css";
import "./Styles/ComponentsStyle/UsersRecommended.css";
import "./Styles/Responsive/HomeResponsive.css";
import "./Styles/Responsive/NavResponsive.css";
import "./Styles/Responsive/PostResponsive.css";
import "./Styles/ComponentsStyle/UsersProfile.css";
import "./Styles/Responsive/Profile.css";
import "./Styles/ComponentsStyle/CreatePost.css";

const Home = lazy(() => import("./Pages/Home"));
const Profile = lazy(() => import("./Pages/Profile"));
const Login = lazy(() => import("./Pages/Login"));
const Register = lazy(() => import("./Pages/Register"));

function App() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/": {
        document.title = "FlowUp | Home";
        break;
      }
      case "/profile": {
        document.title = "FlowUp | My profile";
        break;
      }
      case "/register": {
        document.title = "FlowUp | Register";
        break;
      }
      case "/login": {
        document.title = "FlowUp | Login";
        break;
      }
    }
  }, [location]);

  return (
    <div className="AppContainer">
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
