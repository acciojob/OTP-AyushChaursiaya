//your JS code here. If required.

const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
  input.addEventListener('input', (event) => {
    const value = event.target.value;
    if (value.length === 1) {
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    } else if (value.length === 0) {
      if (index > 0) {
        inputs[index - 1].focus();
      }
    }
  });
});