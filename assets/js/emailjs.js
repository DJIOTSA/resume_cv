// Form submission handling
window.onload = function () {
  document.querySelector("form#myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceID = "default_service";
    const templateID = "template_tylxebs";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        showAlert("Message sent successfully!")
        this.querySelector('textarea').value="";
      },
      (err) => {
        console.log(JSON.stringify(err));
        showAlert("Fail!... Please try again later!", true);
      }
    );
  });
};

// Function to show alert
function showAlert(message, isError = false) {
  const alertContainer = document.getElementById("alert-container");
  const alert = document.createElement("div");
  alert.className = "alert";
  alert.style.backgroundColor = isError ? "#f44336" : "#4CAF50"; // Red for error, green for success
  alert.innerText = message;

  alertContainer.appendChild(alert);

  // Fade out and remove the alert after 3 seconds
  setTimeout(() => {
    alert.style.opacity = "0.5";
    setTimeout(() => {
      alert.remove();
    }, 600); // Match the transition duration
  }, 5000);
}
