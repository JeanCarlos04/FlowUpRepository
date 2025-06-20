import Nav from "../Components/Nav";
import Aside from "../Components/Aside";
import Post from "../Components/Post";
import UsersRecommended from "../Components/UsersRecommended";
import useWidthHook from "../Hooks/useWidthHook";
import BlueButton from "../Components/BlueButton";
import { users } from "../Constants/Users";
import { useContextHook } from "../Hooks/useContextHook";
import CrearPost from "../Components/CreatePosts";

export default function Home() {
  const { post, hideCreatePost, setHideCreatePost } = useContextHook();
  const width = useWidthHook();

  return (
    <div className="principalHomeContainer">
      <Nav />
      <div className="HomeContentContainer">
        <Aside />

        <main className="mainSection">
          <section className="sectionPrincipalPosts">
            <header className="headerContainer">
              <BlueButton
                buttonWidth="auto"
                buttonHeight="35px"
                textSize={width > 768 ? "18px" : "15px"}
                text="Your Page"
                paddingInline={width > 768 ? "20px" : "15px"}
              />
              <BlueButton
                buttonWidth="auto"
                buttonHeight="35px"
                textSize={width > 768 ? "18px" : "15px"}
                text="Following"
                paddingInline="20px"
              />
              <BlueButton
                buttonWidth="auto"
                buttonHeight="35px"
                textSize={width > 768 ? "18px" : "15px"}
                text="Topics"
                paddingInline="20px"
              />
            </header>
            <div className="postContainerDiv">
              <Post posts={post} />
            </div>
          </section>
          {width > 1024 ? <UsersRecommended users={users} /> : null}
        </main>
        {hideCreatePost && (
          <section className="createPostSection">
            <CrearPost deletePost={setHideCreatePost} />
          </section>
        )}
      </div>
    </div>
  );
}
