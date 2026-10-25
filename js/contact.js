// Contact form: validation, submit, and success/error states.
// The form handler URL lives in the form's data-endpoint attribute.
// TODO(spencer): set data-endpoint once the form route is chosen.
(function () {
  var form = document.getElementById("contact-form");
  if (!form) return;

  var success = document.getElementById("formSuccess");
  var error = document.getElementById("formError");
  var button = form.querySelector('button[type="submit"]');

  function showStatus(ok) {
    success.hidden = !ok;
    error.hidden = ok;
    (ok ? success : error).scrollIntoView({ block: "center" });
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    success.hidden = true;
    error.hidden = true;

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      form.querySelector(":invalid").focus();
      return;
    }

    var endpoint = form.getAttribute("data-endpoint");
    if (!endpoint) {
      showStatus(false);
      return;
    }

    button.disabled = true;
    fetch(endpoint, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then(function (response) {
        if (!response.ok) throw new Error("Request failed");
        form.reset();
        form.classList.remove("was-validated");
        showStatus(true);
      })
      .catch(function () {
        showStatus(false);
      })
      .then(function () {
        button.disabled = false;
      });
  });
})();
