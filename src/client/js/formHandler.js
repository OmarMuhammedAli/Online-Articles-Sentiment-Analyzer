import { assignValues } from "./updateUI";
import { checkURL } from "./checkURL";

// const post = async (url = "", data = {}) => {
//   const response = await fetch(url, {
//     method: "POST",
//     credentials: "same-origin",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   try {
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//   }
// };

export const handleSubmit = () => {
  /**
   * TODO
   *  - Get Value of the input for URL
   *  - Check if it's URL or not
   *      yes
   *          send it to the backend
   *      no
   *          show user message it's not valid URL
   */
  const data = {
    model: "general_en",
    score_tag: "P",
    agreement: "DISAGREEMENT",
    subjectivity: "SUBJECTIVE",
    confidence: "86",
    irony: "NONIRONIC",
    sentence_list: [
      {
        text: "Skip to content",
      },
    ],
  };
  const url = document.getElementById("article-url").value;
  if (checkURL(url)) {
    // TODO: call the backend with the URL
    assignValues(data);
  } else {
    alert("Please enter a valid URL");
  }
};
