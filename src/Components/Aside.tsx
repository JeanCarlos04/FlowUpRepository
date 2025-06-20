import { Link } from "react-router-dom";
import useWidthHook from "../Hooks/useWidthHook";
import BlueButton from "../Components/BlueButton";
import { useContextHook } from "../Hooks/useContextHook";

type AsideProps = {
  showAside?: boolean;
};

export default function Aside({ showAside }: AsideProps) {
  const width = useWidthHook();
  const { setHideCreatePost } = useContextHook();

  const showCreatePost = () => {
    setHideCreatePost(true);
  };

  return (
    <>
      {width > 1024 || showAside ? (
        <div className="principalAsideContainer">
          <aside className="asideContainer">
            <nav className="navLinksContainer">
              <Link className="linkNavigator" to={"/"}>
                <img
                  alt="Home Icon"
                  className="asideIconImg"
                  src="/svg/Home.svg"
                />{" "}
                Home
              </Link>

              <Link className="linkNavigator" to={"/profile"}>
                <img
                  alt="User photo"
                  className="asideIconImg"
                  src="/svg/UserWhite.svg"
                />{" "}
                Profile
              </Link>

              <Link className="linkNavigator" to={"/profile"}>
                <img
                  alt="Magnifyinh glass icon"
                  className="asideIconImg"
                  src="/svg/LupaWhite.svg"
                />{" "}
                Explore
              </Link>

              <Link className="linkNavigator" to={"/notifications"}>
                <img
                  alt="Bell icon"
                  className="asideIconImg"
                  src="/svg/BellWhite.svg"
                />{" "}
                Notifications
              </Link>
            </nav>

            <div className="newPostContainer">
              <h1 className="newPostH1">Express your ideas!</h1>
              <BlueButton
                onClick={showCreatePost}
                altImg="Feather icon"
                imgSize="23px"
                textSize="20px"
                text="New post"
                buttonWidth="180px"
                buttonHeight="35px"
                img="/svg/PlumaWhite.svg"
              />
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
