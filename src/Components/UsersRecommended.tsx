import type { Users } from "../Constants/Users";
import MoreOptionBtn from "./MoreOptionBtn";

type UsersRecommendedProps = {
  users: Users[];
};

export default function UsersRecommended({ users }: UsersRecommendedProps) {
  return (
    <div className="principalUsersAsideContainer">
      <aside className="usersRecommendedAside">
        <h1 className="recommendedTitleAside">You may like</h1>
        {users.map((user) => {
          return (
            <article className="recommendedUserArticle" key={user.id}>
              <div className="recommendedInfoContainer">
                <img
                  alt="User photo"
                  className="recommendedUserImg"
                  src={user.avatarUlr}
                />
                <div className="recommendedNamesContainer">
                  <h1 className="recommendedUser">{user.user}</h1>
                  <h2 className="recommendedUsername">@{user.username}</h2>
                </div>
              </div>
              <MoreOptionBtn />
            </article>
          );
        })}
      </aside>
    </div>
  );
}
