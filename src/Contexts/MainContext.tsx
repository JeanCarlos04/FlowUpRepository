import { createContext, useEffect, type ReactNode } from "react";
import { useState } from "react";
import type { Users } from "../Constants/Users";
import { type Post } from "../Constants/Post";

type MainContextProps = {
  children: ReactNode;
};

type MainContextTypes = {
  users: Users[];
  post: Post[];
  handleNewPosts: (
    user: {
      id: number;
      user: string;
      username: string;
      avatarUlr: string;
      isVerified?: boolean;
    },
    id: `${string}-${string}-${string}-${string}-${string}`,
    text: string,
    imgs?: string[],
    videoUrl?: string,
    createdAt?: Date,
    likes?: number,
    comments?: number,
    shares?: number,
    isLikedByCurrentUser?: boolean,
    location?: string,
    tags?: string[],
    isFollowing?: boolean
  ) => void;
  handleAddLike: (
    id: `${string}-${string}-${string}-${string}-${string}`
  ) => void;
  handleFollowUser: (
    id: `${string}-${string}-${string}-${string}-${string}`
  ) => void;
  hideCreatePost: boolean;
  setHideCreatePost: React.Dispatch<React.SetStateAction<boolean>>;
};

const MainContextDefault = {
  users: [],
  post: [],
  handleNewPosts: () => {},
  handleAddLike: () => {},
  handleFollowUser: () => {},
  hideCreatePost: false,
  setHideCreatePost: () => {},
};

const MainContext = createContext<MainContextTypes>(MainContextDefault);

function MainContextProvider({ children }: MainContextProps) {
  const [hideCreatePost, setHideCreatePost] = useState(false);
  const [users, setUsers] = useState<Users[]>([]);
  const [post, setPost] = useState<Post[]>([]);

  crypto.randomUUID();

  useEffect(() => {
    setUsers([]);
  }, []);

  const handleNewPosts = (
    user: {
      id: number;
      user: string;
      username: string;
      avatarUlr: string;
      isVerified?: boolean;
    },

    id: `${string}-${string}-${string}-${string}-${string}`,
    text: string,
    imgs?: string[],
    videoUrl?: string,
    createdAt = new Date(),
    likes = 0,
    comments = 0,
    shares = 0,
    isLikedByCurrentUser = false,
    location?: string,
    tags?: string[],
    isFollowing = false
  ) => {
    setPost((prev) => [
      ...prev,
      {
        id,
        user,
        text,
        imgs,
        videoUrl,
        createdAt,
        likes,
        comments,
        shares,
        isLikedByCurrentUser,
        location,
        tags,
        isFollowing,
      },
    ]);
  };

  const handleAddLike = (
    id: `${string}-${string}-${string}-${string}-${string}`
  ) => {
    setPost((prev) =>
      prev.map((eachPost) => {
        if (eachPost.id === id && eachPost.isLikedByCurrentUser === false) {
          return {
            ...eachPost,
            likes: eachPost.likes + 1,
            isLikedByCurrentUser: true,
          };
        } else if (
          eachPost.id === id &&
          eachPost.isLikedByCurrentUser === true
        ) {
          return {
            ...eachPost,
            likes: eachPost.likes - 1,
            isLikedByCurrentUser: false,
          };
        }
        return eachPost;
      })
    );
  };

  const handleFollowUser = (
    id: `${string}-${string}-${string}-${string}-${string}`
  ) => {
    setPost((prev) =>
      prev.map((eachPost) => {
        if (eachPost.id === id && eachPost.isFollowing === false) {
          return { ...eachPost, isFollowing: true };
        } else {
          return { ...eachPost, isFollowing: false };
        }

        return eachPost;
      })
    );
  };

  return (
    <MainContext.Provider
      value={{
        users,
        post,
        handleNewPosts,
        handleAddLike,
        handleFollowUser,
        hideCreatePost,
        setHideCreatePost,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}

export { MainContext, MainContextProvider };
