import { useContextHook } from "../Hooks/useContextHook";
import { useForm } from "react-hook-form";
import BlueButton from "./BlueButton";
import { useEffect, useState } from "react";

type FormType = {
  text: string;
  imgs: FileList;
};

type CrearPostProps = {
  deletePost: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CrearPost({ deletePost }: CrearPostProps) {
  const [contentImage, setContentImage] = useState<string | null>(null);

  const { handleNewPosts } = useContextHook();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm<FormType>();
  const imgs = watch("imgs");

  useEffect(() => {
    if (imgs && imgs.length > 0) {
      const imgURL = URL.createObjectURL(imgs[0]);
      setContentImage(imgURL);
    }
  }, [imgs]);

  const handleOnSubmit = handleSubmit((data) => {
    if (data.imgs.length > 0) {
      const image = data.imgs[0];
      const imageLoaded = URL.createObjectURL(image);
      console.log(imageLoaded);
      handleNewPosts(myProfile, crypto.randomUUID(), data.text, [imageLoaded]);
    } else {
      handleNewPosts(myProfile, crypto.randomUUID(), data.text);
    }

    reset();
  });

  const myProfile = {
    id: 0,
    user: "Jean Carlos",
    username: "jean_CCF",
    avatarUlr: "/imgs/UsuarioNulo.webp",
    isVerified: false,
  };

  return (
    <div>
      <form className="createPostForm" onSubmit={handleOnSubmit}>
        <div className="createPostDivHeader">
          <img className="createPostMyUser" src="/imgs/UsuarioNulo.webp" />

          <BlueButton
            onClick={handleOnSubmit}
            paddingInline="15px"
            buttonHeight="28px"
            buttonWidth="100px"
            text="Post"
            img="/svg/PlumaWhite.svg"
            textSize="18px"
            imgSize="20px"
          />
        </div>
        <div>
          {errors.text && (
            <span style={{ color: "red" }}>{errors.text.message}</span>
          )}
          <textarea
            rows={5}
            maxLength={250}
            className="textAreaContent"
            {...register("text", {
              required: { value: true, message: "Este campo es obligatorio" },
            })}
            placeholder="Share something!"
          />

          {contentImage && (
            <div className="imgContentContainer">
              <img className="imgContent" src={contentImage} />
            </div>
          )}
        </div>

        <input
          style={{ display: "none" }}
          id="inputFile"
          className="createPostInputImgs"
          {...register("imgs")}
          type="file"
          accept="image/*"
        />
        {errors.imgs && (
          <span style={{ color: "red" }}>{errors.imgs?.message}</span>
        )}
        <div className="createPostBtnContainer">
          <div className="createPostBtnInteractions">
            <label className="labelInputImg" htmlFor="inputFile">
              <img className="createPostIcons" src="/svg/ImageGray.svg" />
            </label>
            <label className="labelInputImg">
              <img className="createPostIcons" src="/svg/EmojiGray.svg" />
            </label>
          </div>
          <button
            onClick={() => deletePost(false)}
            type="button"
            className="deleteCreatePost"
          >
            <img className="deleteCreatePostIcon" src="/svg/eraserGray.svg" />
          </button>
        </div>
      </form>
    </div>
  );
}
