let resultDiv; // Declare resultDiv globally

document.addEventListener("DOMContentLoaded", function () {
  const textInput = document.getElementById("text-input");
  const checkBtn = document.getElementById("check-btn");
  resultDiv = document.getElementById("result"); // Assign resultDiv globally

  checkBtn.addEventListener("click", function () {
    checkForPalindrome(textInput.value);
  });
});

function checkForPalindrome(input) {
  // Check for empty input
  if (input.trim() === "") {
    alert("Please input a value");
    return;
  }

  const originalInput = input.toLowerCase().replace(/[^A-Za-z0-9]/g, "");

  resultDiv.replaceChildren();

  const reversedInput = [...originalInput].reverse().join("");

  let resultMsg = `<strong>${input}</strong> ${
    originalInput === reversedInput ? "is" : "is not"
  } a palindrome.`;

  const pTag = document.createElement("p");
  pTag.className = "user-input";
  pTag.innerHTML = resultMsg;
  resultDiv.appendChild(pTag);

  resultDiv.classList.remove("hidden");
}
