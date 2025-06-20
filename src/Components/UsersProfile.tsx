import BlueButton from "./BlueButton";
import Post from "./Post";
import { posts } from "../Constants/Post";

const myUser = {
  id: 1,
  user: "Jean Carlos",
  username: "jean_ccf",
  avatarUlr: "/imgs/UsuarioNulo.webp",
  isVerified: true,
  bio: "Desarrollador frontend amante de React y TypeScript.",
  location: "Santo Domingo Este, RD",
  bannerUrl: "/imgs/banner1.jpg",
  followersCount: 1520,
  followingCount: 312,
  postsCount: 58,
  createdAt: "2022-08-15",
  email: "jean@example.com",
  phone: "+1 809-555-1234",
  links: "youtube.com/jeanCarlos04",
  isPrivate: false,
  isFollowing: false,
};

export default function UsersProfile() {
  return (
    <section className="profileSection">
      <header className="profileHeader">
        <div className="profileSubContainer">
          <div className="profileImgNamesDiv">
            <img
              alt="User photo"
              className="profileUserImg"
              src="/imgs/UsuarioNulo.webp"
            />
            <div className="profileNamesContainer">
              <h1 className="profileName">Jean Carlos</h1>
              <h2 className="profileUsername">@Jean_CCF</h2>
            </div>
          </div>
          <BlueButton
            text="Update"
            textSize="15px"
            buttonWidth="115px"
            buttonHeight="34px"
            img="/svg/EditWhite.svg"
            imgSize="18px"
          />
        </div>

        <p className="profileBio">{myUser.bio}</p>
        <div className="profileMoreInfoContainer">
          <h3 className="moreInfo">
            <img
              alt="Calendar icon"
              className="moreInfoIcon"
              src="/svg/CalendarGray.svg"
            />{" "}
            Joined / {myUser.createdAt}
          </h3>
          <h3 className="moreInfo">
            <img
              alt="Location icon"
              className="moreInfoIcon"
              src="/svg/LocationGray.svg"
            />{" "}
            Location: {myUser.location}
          </h3>
          <h3 className="moreInfo">
            {" "}
            <img
              alt="Link icon"
              className="moreInfoIcon"
              src="/svg/LinkGray.svg"
            />{" "}
            {myUser.links}
          </h3>
        </div>

        <div className="profileCountsDiv">
          <h3 className="profileCounts">
            Follwing:{" "}
            <span className="spanCounts">{myUser.followingCount}</span>
          </h3>
          <h3 className="profileCounts">
            {" "}
            Followers:{" "}
            <span className="spanCounts">{myUser.followingCount}</span>
          </h3>
          <h3 className="profileCounts">
            Posts: <span className="spanCounts">{myUser.postsCount}</span>
          </h3>
        </div>
      </header>

      <div className="profileBtnsContainer">
        <button className="profileInteractionBtns">Posts</button>
        <button className="profileInteractionBtns">Media</button>
        <button className="profileInteractionBtns">Comments</button>
        <button className="profileInteractionBtns">Likes</button>
      </div>

      <article>
        <Post posts={posts} />
      </article>
    </section>
  );
}
