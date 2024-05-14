// Select the form and result elements from the DOM
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

// Add an event listener to the form
form.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data as an object
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Perform the division and store the result
  const resultValue = dividend / divider;
  const roundedResult = Math.floor(resultValue);

  try {
    // Check for empty inputs
    if (dividend === "" || divider === "") {
      console.error(
        "Division not performed. Both values are required in inputs. Try again"
      );
    }
    // Check for division by zero
    else if (divider == 0) {
      console.error(
        "Division not performed. Invalid number provided. Try again"
      );
    }
    // Check for non-numeric inputs
    else if (isNaN(dividend) || isNaN(divider)) {
      console.error("Something critical went wrong. Please reload the page");
    }
    // If all checks pass, display the rounded result
    else result.innerText = roundedResult;
  } catch (error) {
    // If an error occurred, display the error message
    result.innerText = error.message;
  }

  // Log the final result to the console
  console.log(result.innerText);
});
