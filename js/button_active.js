// Get the form and the Apply button
const form = document.getElementById("form1");
const applyButton = document.getElementById("APPLY");

// Disable the Apply button initially
applyButton.disabled = true;

// Add event listeners to the input fields
const inputFields = form.querySelectorAll("input");
inputFields.forEach((input) => {
  input.addEventListener("input", () => {
    // Check if any input fields are empty
    const emptyFields = Array.from(inputFields).some(
      (input) => input.value === ""
    );
    // Enable/disable the Apply button based on whether any fields are empty
    applyButton.disabled = emptyFields;
  });
});
