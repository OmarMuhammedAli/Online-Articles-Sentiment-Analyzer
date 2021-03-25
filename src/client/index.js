import "./styles/style.scss";
import { handleSubmit } from './js/formHandler'


window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  form.onsubmit = (event) => {
    event.preventDefault();
    handleSubmit()
  };
});
