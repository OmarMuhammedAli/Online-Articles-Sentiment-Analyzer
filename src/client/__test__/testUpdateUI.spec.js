import { assignValues } from "../js/updateUI";

describe("Test assignValues functionality", () => {
  test("Test to see whether assignValues is defined", () => {
    expect(assignValues).toBeDefined();
  });

  test("Test whether the injcted values in the DOM are correct", () => {
    document.body.innerHTML = `<section>
        <strong>Form Results:</strong>

        <ul class="list-group list-group-flush col-sm-8">
          <li class="list-group-item">
            <div><strong>Text:</strong> <span id="text"></span></div>
          </li>
          <li class="list-group-item">
            <div><strong>Agreement:</strong> <span id="agreement"></span></div>
          </li>
          <li class="list-group-item">
            <div><strong>Subjectivity:</strong> <span id="subjectivity"></span></div>
          </li>
          <li class="list-group-item">
            <div><strong>Confidence:</strong> <span id="confidence"></span></div>
          </li>
          <li class="list-group-item">
            <div><strong>Irony:</strong> <span id="irony"></span></div>
          </li>
          <li class="list-group-item">
            <div><strong>Score Tag:</strong> <span id="score_tag"></span></div>
          </li>
        </ul>
      </section>`;
    const data = {
      score_tag: "P",
      agreement: "DISAGREEMENT",
      subjectivity: "SUBJECTIVE",
      confidence: "86",
      irony: "NONIRONIC",
      text: "Skip to content",
    };
    assignValues(data)
    expect(document.getElementById("text").innerHTML).toBe('Skip to content')
    expect(document.getElementById("agreement").innerHTML).toBe("DISAGREEMENT")
    expect(document.getElementById("subjectivity").innerHTML).toBe("SUBJECTIVE")
    expect(document.getElementById("confidence").innerHTML).toBe("86")
    expect(document.getElementById("irony").innerHTML).toBe("NONIRONIC")
    expect(document.getElementById("score_tag").innerHTML).toBe("P")
  });
});
