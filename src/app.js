import { showAlert } from "./funcion";
import "./styles.scss";
import "./static/rusa.jpg";

const d = document,
  btn_click = d.getElementById("click");

btn_click.addEventListener("click", showAlert);

function valid(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}

console.log(valid("hola"));
