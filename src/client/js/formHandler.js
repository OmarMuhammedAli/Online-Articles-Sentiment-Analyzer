import { assignValues } from "./updateUI";
import { checkURL } from "./checkURL";
import 'babel-polyfill'

const post = async (endpoint = "", data = {}) => {
  const response = await fetch(endpoint, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const handleSubmit = async () => {
  /**
   * TODO
   *  - Get Value of the input for URL
   *  - Check if it's URL or not
   *      yes
   *          send it to the backend
   *      no
   *          show user message it's not valid URL
   */
  const url = document.getElementById("article-url").value;
  if (checkURL(url)) {
    // TODO: call the backend with the URL
    const data = await post('http://localhost:8081/analysis', {url: url})
    assignValues(data);
  } else {
    alert("Please enter a valid URL");
  }
};
