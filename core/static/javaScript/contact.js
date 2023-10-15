function clearFormInputs() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const commentInput = document.getElementById("comment");

    nameInput.value = "";
    emailInput.value = "";
    commentInput.value = "";
}

function initializeFeedbackForm() {
    const feedbackForm = document.getElementById("feedbackForm");

    feedbackForm.addEventListener("submit", function (event) {
        event.preventDefault();
        clearFormInputs();
    });
}

document.addEventListener("DOMContentLoaded", function () {
    initializeFeedbackForm();
});
