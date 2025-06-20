import Nav from "../Components/Nav";
import Aside from "../Components/Aside";
import UsersRecommended from "../Components/UsersRecommended";
import { users } from "../Constants/Users";
import UsersProfile from "../Components/UsersProfile";
import useWidthHook from "../Hooks/useWidthHook";

export default function Profile() {
  const width = useWidthHook();

  console.log(width);

  return (
    <div className="principalHomeContainer">
      <Nav />
      <div className="HomeContentContainer">
        <Aside />

        <main className="mainSection">
          <div className="postContainerDiv">
            <UsersProfile />
          </div>

          {width > 1024 ? <UsersRecommended users={users} /> : ""}
        </main>
      </div>
    </div>
  );
}
