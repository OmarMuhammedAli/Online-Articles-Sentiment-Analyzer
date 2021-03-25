export const assignValues = (data) => {
  document.getElementById("text").innerHTML = data.text;
  document.getElementById("agreement").innerHTML = data.agreement;
  document.getElementById("subjectivity").innerHTML = data.subjectivity;
  document.getElementById("confidence").innerHTML = data.confidence;
  document.getElementById("irony").innerHTML = data.irony;
  document.getElementById("score_tag").innerHTML = data.score_tag;
};
