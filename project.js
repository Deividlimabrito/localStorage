 let nameForm = document.querySelector("#name-form");
 let welcomeContainer = document.querySelector("#welcome");
 let logoutBtn = document.querySelector("#logout");

 function checkUser() {
    const userName = localStorage.getItem("name");
    
    if (userName) {
        nameForm.style.display = "none";
        welcomeContainer.style.display = "block";

        let userNameElement = document.querySelector("#username");

        userNameElement.textContent = userName;
    } else {
        nameForm.style.display = "block";
        welcomeContainer.style.display = "nome";
    }
}
 nameForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let nameInput = document.querySelector("#name");

    localStorage.setItem("name", nameInput.value);

    nameInput.value = "";

    checkUser();
 });

 logoutBtn.addEventListener("click", () => {

    localStorage.removeItem("name");
    checkUser();
 });
// Aplication Start
checkUser();

