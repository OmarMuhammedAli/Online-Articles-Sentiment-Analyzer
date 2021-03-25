import "./styles/style.scss";
import { handleSubmit } from './js/formHandler'


window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  form.onsubmit = (event) => {
    event.preventDefault();
    /*
        1- Get URL from input field.
        2- Check the validity of the URL.
            i- If valid: do some stuff.
            ii- else: alert the User.
    */
    handleSubmit()
  };
});
