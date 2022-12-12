// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
function onWindowLoad() {
    let contactPage = document.getElementById("contact-page");
    let button = document.getElementById("submit-button");
    button.addEventListener("click", message);
    function message() {
        contactPage.style.fontSize = "24px";
        contactPage.innerHTML = "Thank you for your message";
    }

}
window.addEventListener("load", onWindowLoad);
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

