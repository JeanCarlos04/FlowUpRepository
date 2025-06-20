import type { Post } from "../Constants/Post";
import { useContextHook } from "../Hooks/useContextHook";

type PostProps = {
  posts: Post[];
};

export default function Post({ posts }: PostProps) {
  const { handleAddLike, handleFollowUser } = useContextHook();

  return (
    <>
      {posts.map((post) => {
        return (
          <article key={post.id} className="postContainer">
            <header className="headerPostContainer">
              <div className="postUserInfoDiv">
                <img
                  alt="User photo"
                  src={post.user.avatarUlr}
                  className="postUserImg"
                />
                <div className="divNameInfo">
                  <h1 className="userUserName">{post.user.user}</h1>
                  <h2 className="userTitleH1">@{post.user.username}</h2>
                </div>
                <h2 className="postCreatedAt">
                  {post.createdAt.toLocaleString()}
                </h2>
              </div>

              <div>
                <button
                  onClick={() => handleFollowUser(post.id)}
                  className={post.isFollowing ? "followingBtn" : `followBtn`}
                >
                  {post.isFollowing ? "Following" : "+ Follow"}
                </button>
              </div>
            </header>

            <div className="postContentContainer">
              <p className="contentParapragh">{post.text}</p>
              {post.imgs?.map((img) => {
                return (
                  <div key={img} className="postImgContainer">
                    <img
                      alt="Img post content"
                      className="postContentImg"
                      src={img}
                    />
                    ;
                  </div>
                );
              })}
            </div>

            <div className="btnInteractionContainer">
              <button
                onClick={() => handleAddLike(post.id)}
                className="postBtnInteractions"
              >
                <img
                  alt="Like icon"
                  className="postInteractionsIcon"
                  src="/svg/Unliked.svg"
                />
                {post.likes}
              </button>
              <button className="postBtnInteractions">
                <img
                  alt="Comment icon"
                  className="postInteractionsIcon"
                  src="/svg/Comment.svg"
                />
                {post.comments}
              </button>
              <button className="postBtnInteractions">
                <img
                  alt="Share icon"
                  className="postInteractionsIcon"
                  src="/svg/ShareIcon.svg"
                />{" "}
                Share
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
}
