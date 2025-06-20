export default function MoreOptionBtn() {
  return (
    <button
      aria-label="More options"
      style={{
        background: "transparent",
        borderStyle: "none",
        cursor: "pointer",
      }}
    >
      <img
        className="BtnMoreOptions"
        alt="Ellipsis Icon"
        src="/svg/ellipsisGray.svg"
        style={{ width: "19px" }}
      />
    </button>
  );
}
