// Form submission handling
window.onload = function () {
  const form = document.querySelector("form#myForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = new FormData(this);
    formData.append("service_id", "service_elgiazj");
    formData.append("template_id", "template_h4fq7r7");
    formData.append("user_id", "HcQt66_RE4ZQ4nSA1");

    $.ajax("https://api.emailjs.com/api/v1.0/email/send-form", {
      type: "POST",
      data: formData,
      contentType: false, // auto-detection
      processData: false, // no need to parse formData to string
    })
      .done(function () {
        showAlert("Your mail is sent!");
        form.querySelector("textarea").value = "";
      })
      .fail(function (error) {
        showAlert("FAILED...Try again later", true);
      });
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

// window.onload = () => {
//   // emailjs
//   $("#myForm").on("submit", function (event) {
//     event.preventDefault(); // prevent reload

//     var formData = new FormData(this);
//     formData.append("service_id", "service_elgiazj");
//     formData.append("template_id", "template_h4fq7r7");
//     formData.append("user_id", "HcQt66_RE4ZQ4nSA1");

//     $.ajax("https://api.emailjs.com/api/v1.0/email/send-form", {
//       type: "POST",
//       data: formData,
//       contentType: false, // auto-detection
//       processData: false, // no need to parse formData to string
//     })
//       .done(function () {
//         alert("Your mail is sent!");
//         this.querySelector("textarea").value = "";
//       })
//       .fail(function (error) {
//         alert("Oops... " + JSON.stringify(error));
//       });
//   });
// };
