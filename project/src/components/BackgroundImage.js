import ReactDOM from "react-dom";

function BackgroundImage({ image }) {
  return ReactDOM.createPortal(
    <div
      className={`fixed min-h-screen inset-0 bg-${image} bg-cover -z-50`}
    ></div>,
    document.getElementById("background")
  );
}

export default BackgroundImage;
