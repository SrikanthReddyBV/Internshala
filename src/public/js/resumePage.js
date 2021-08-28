// written by srikanth

let applynow = document.getElementById("applynow");
let signout = document.getElementById("signout");

applynow.addEventListener("click", function () {
  popnow();
});

signout.addEventListener("click", function () {
  window.location.href = "index.ejs";
});

function popnow() {
  document.querySelector(".popup").classList.add("active");
  document
    .querySelector(".popup .close-btn")
    .addEventListener("click", function () {
      document.querySelector(".popup").classList.remove("active");
    });

  // test
  let resume_submit = document.getElementById("home_page");
  resume_submit.addEventListener("click", function () {
    window.location.href = "index.ejs";
  });
}
function setName() {
  let getName = JSON.parse(localStorage.getItem("nameOfPerson"));

  let btn1 = document.getElementById("cta");
  let btn2 = document.getElementById("cta1");
  btn1.style.display = "none";
  btn2.style.display = "none";
  let name = document.createElement("li");
  let anc1 = document.createElement("a");

  let signout = document.createElement("li");
  let addItInNevbar = document.getElementById("navigationkkk");

  anc1.href = "index.ejs";
  name.innerHTML = getName[0];
  signout.innerHTML = "Sign Out";
  anc1.append(signout);
  anc1.setAttribute("id", "signOut");
  addItInNevbar.append(name, anc1);

  let firstName = document.getElementById("firstNameR");
  let lastName = document.getElementById("lastNameR");
  firstName.innerHTML = getName[0];
  lastName.innerHTML = getName[1];

  let email = document.getElementById("emailResume");
  let linkedin = document.getElementById("linkedinResume");
  let github = document.getElementById("gitHubResume");

  email.innerHTML = `${getName[1]}.${getName[0]}@masaischool.com`;
  linkedin.innerHTML = `linkedin.com/in/${getName[0]}-${getName[1]}/`;
  github.innerHTML = `github.com/${getName[1]}_${getName[0]}`;

  localStorage.removeItem("nameOfPerson");
}
setName();
