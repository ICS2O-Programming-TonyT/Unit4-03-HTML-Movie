// Get the form and result elements
const form = document.getElementById('converter-form');
const resultDiv = document.getElementById('result');

// Add event listener to the form submit button
form.addEventListener('submit', function(event) {
  // Prevent default form submission
  event.preventDefault();

  // Get the Fahrenheit value from the form
  const Age = parseInt(document.getElementById('Age').value);

  // Calculate the Celsius value
  function Check() {
    var Message = "";
    if (Number.isInteger(Age)) {
      if (Age < 0) {
        var Message = Message + "<br> No Negative Numbers Allowed."
      } else {
        if (Age >= 17) {
          var Message = Message + "<br> R-rated movie alone ✅"
        }
        if (Age >= 13) {
          var Message = Message + "<br> PG-13 movie alone ✅"
        }
        if (Age) {
          var Message = Message + "<br> G movie alone ✅"
        }
        if (Age >= 8) {
          var Message = Message + "<br> PG movie alone ✅"
        }
        if (Age >= 13) {
          var Message = Message + "<br> Can go to movies alone ✅"
        }
      }
    }
    return Message
  }
  // Display the result
  resultDiv.innerHTML = `You can watch ${Check()}`;
});
