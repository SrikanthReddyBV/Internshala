var login = document.getElementById("login_btn");
login.addEventListener("click", initiateLogin);

function initiateLogin() {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  let isTrue = false;

  if (email.value == "" || password.value == "") {
    alert("Enter all fields");
  } else {
    let reg_std_db = JSON.parse(localStorage.getItem("reg_std_db"));
    if (reg_std_db == null) {
      alert("Please signup first");
      window.location.href = "students_reg.html";
    }
    for (let i = 0; i < reg_std_db.length; i++) {
      if (
        reg_std_db[i].email == email.value &&
        reg_std_db[i].password == password.value
      ) {
        isTrue = true;
        alert("Login Success!");
        let btn1 = document.getElementById("cta");
        let btn2 = document.getElementById("cta1");
        let name = document.createElement("li");
        let anc1 = document.createElement("a");
        let signout = document.createElement("li");
        let addItInNevbar = document.getElementById("navigationkkk");
        localStorage.setItem(
          "nameOfPerson",
          JSON.stringify([reg_std_db[i].firstname, reg_std_db[i].lastname])
        );

        btn1.style.display = "none";
        btn2.style.display = "none";
        anc1.href = "../index.html";
        name.innerHTML = reg_std_db[i].firstname;
        signout.innerHTML = "Sign Out";
        anc1.append(signout);
        anc1.setAttribute("id", "signOut");
        addItInNevbar.append(name, anc1);
        email.value = "";
        password.value = "";
        popnow(); // calls popnow function if login successful
      }
    }
    if (!isTrue) {
      alert("Enter Correct Details or Signup");
      email.value = "";
      password.value = "";
    }
  }
}
// for pop
function popnow() {
  document.querySelector(".popup").classList.add("active");
  document
    .querySelector(".popup .close-btn")
    .addEventListener("click", function () {
      document.querySelector(".popup").classList.remove("active");
    });

  // test
  let resume_submit = document.getElementById("resume_submit");
  resume_submit.addEventListener("click", function () {
    window.location.href = "resumePage.html";
  });
}
