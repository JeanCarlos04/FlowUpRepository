import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="main">
      <div className="container2">
        <header className="headerLogoContainer">
          <img className="logo1" src="/imgs/FlowUpLogo.webp" />
          <h1 className="logoTitle">FlowUp</h1>
        </header>
        <h2 className="h-log">Log in to your account</h2>

        <div className="inputs">
          <input
            className="input-s"
            type="text"
            placeholder="Enter your username"
          />
          <input
            className="input-s"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="botones">
          <Link className="linkSignIn" to="/register">
            {" "}
            <button className="btn-sign">Sign In</button>
          </Link>

          <button className="btn-login">Log In</button>
        </div>
      </div>
      <div className="container-end">
        <img className="logoContainer2" src="imgs/Logo2.png"/>
        <h1 className="frase">Connect, share, and discover what inspires you. Join the community.</h1>
      </div>
    </main>
  );
}
