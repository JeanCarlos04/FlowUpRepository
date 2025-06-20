type BlueButtonProps = {
  text: string;
  textSize: string;
  buttonWidth: string;
  buttonHeight: string;
  img?: string;
  imgSize?: string;
  paddingInline?: string;
  altImg?: string;
  onClick?: () => void;
};

export default function BlueButton({
  text,
  textSize,
  buttonWidth,
  buttonHeight,
  img,
  imgSize,
  paddingInline,
  altImg,
  onClick,
}: BlueButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        fontSize: textSize,
        width: buttonWidth,
        height: buttonHeight,
        paddingInline: paddingInline,
      }}
      className="newPostBtn"
    >
      {text}
      {img ? (
        <img
          alt={altImg}
          style={{ width: imgSize, height: imgSize }}
          className="newPostIcon"
          src={`${img}`}
        />
      ) : null}
    </button>
  );
}
