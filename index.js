const textContainer = document.getElementById("text-container");
const button = document.getElementById("text-input");

let text =
  "Pushing to the stack is faster than allocating on the heap because the allocator never has to search for a place to store new data; that location is always at the top of the stack. Comparatively, allocating space on the heap requires more work, because the allocator must first find a big enough space to hold the data and then perform bookkeeping to prepare for the next allocation.";

button.addEventListener("click", () => {
    navigator.clipboard.readText().then(function (textFromClipboard) {
        text = textFromClipboard;
        const bionicText = `<p class="text">${bionicReading(text)}</p>`;
        textContainer.innerHTML = bionicText;
        });
});

function bionicReading(text) {
  const wordArray = text.split(" ");

  const letterArr = wordArray.map((el) => el.split(""));

  const arr1 = letterArr.map((el) => {
    const length = el.length;
    const boldLen = Math.floor((length / 100) * 30);
    let boldLetters = [];
    let notBold = [];
    for (let i = 0; i < el.length; i++) {
      if (i <= boldLen) {
        boldLetters.push(el[i]);
      } else {
        notBold.push(el[i]);
      }
    }

    const formattedWord = [];

    formattedWord.push(
      `<span class="bold-letters">${boldLetters.join("")}</span>`
    );
    formattedWord.push(`${notBold.join("")}`);

    return formattedWord;
  });

  const arr2 = arr1.map((el) => el.join("")).join(" ");
  const arr3 = arr2.replace(/.*?(?:\.|!|\?)(?:(?= [A-Z0-9])|$)/gm, "$1$2|");
  const arr4 = arr3.split(". ").join('. <br><br/>');
  return arr4;
}
