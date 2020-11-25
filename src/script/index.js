import "normalize.css";
import "../style/index.scss";

window.onload = function (event) {
  console.log(event);
  setTimeout(() => {
    document.body.style.backgroundColor = "skyblue";
  }, 3000);
};
