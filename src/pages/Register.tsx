export default function Register() {
  return (
    <>
      <main className="main-r">
        <div className="container-r2">
          <img className="img-logo" src="imgs/img_logo.png" />
        </div>
        <div className="container-r">
          <header className="headerLogoContainer-r">
            <img className="logo2" src="/imgs/FlowUpLogo.webp" />
            <h1 className="logoTitle-r">FlowUp</h1>
          </header>
          <h2 className="h-log">Create your account</h2>

          <div className="inputs-r">
            <input
              className="input-sr"
              type="email"
              placeholder="Enter your Email"
            />

            <input
              className="input-sr"
              type="text"
              placeholder="Enter your username"
            />
            <input
              className="input-sr"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="botones-r">
            <button className="btn-sign-r">Sign In</button>
          </div>
        </div>
      </main>
    </>
  );
}
