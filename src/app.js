import { showAlert } from "./funcion";
import "./styles.scss";
import "./static/rusa.jpg";

const d = document,
  btn_click = d.getElementById("click");

btn_click.addEventListener("click", showAlert);
