var login = document.getElementById("login_btn");
login.addEventListener("click", initiateLogin);

async function initiateLogin() {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  let isRegisteredUser = false;

  if (email.value == "" || password.value == "") {
    alert("Enter all fields");
    email.value = null;
    password.value = null;
  } else {
    let res = await fetch("http://localhost:2222/users");
    let registeredUsers = await res.json();
    registeredUsers.forEach((usr) => {
      if (usr.email == email.value && usr.password == password.value) {
        isRegisteredUser = true;
        alert("Login Success!");
        let btn1 = document.getElementById("cta");
        let btn2 = document.getElementById("cta1");
        let name = document.createElement("li");
        let anc1 = document.createElement("a");
        let signout = document.createElement("li");
        let addItInNevbar = document.getElementById("navigationkkk");
        localStorage.setItem(
          "nameOfPerson",
          JSON.stringify([usr.firstname, usr.lastname])
        );

        btn1.style.display = "none";
        btn2.style.display = "none";
        anc1.href = "index.ejs";
        name.innerHTML = usr.firstname;
        signout.innerHTML = "Sign Out";
        anc1.append(signout);
        anc1.setAttribute("id", "signOut");
        addItInNevbar.append(name, anc1);
        email.value = "";
        password.value = "";
        console.log("came here1");
        popnow();
        console.log("came here2");
      } else if (usr.email == email.value && usr.password != password.value) {
        isRegisteredUser = true;
        alert("Incorrect Password");
        password.value = null;
      }
    });

    if (!isRegisteredUser) {
      alert("Incorrect Details! Please Signup!");
      window.location.href = "students_reg.ejs";
    }
  }
}

// function initiateLogin() {
//   const email = document.getElementById("email");
//   const password = document.getElementById("password");
//   let isTrue = false;

//   if (email.value == "" || password.value == "") {
//     alert("Enter all fields");
//   } else {
//     let reg_std_db = JSON.parse(localStorage.getItem("reg_std_db"));
//     if (reg_std_db == null) {
//       alert("Please signup first");
//       window.location.href = "students_reg.html";
//     }
//     for (let i = 0; i < reg_std_db.length; i++) {
//       if (
//         reg_std_db[i].email == email.value &&
//         reg_std_db[i].password == password.value
//       ) {
//         isTrue = true;
//         alert("Login Success!");
//         let btn1 = document.getElementById("cta");
//         let btn2 = document.getElementById("cta1");
//         let name = document.createElement("li");
//         let anc1 = document.createElement("a");
//         let signout = document.createElement("li");
//         let addItInNevbar = document.getElementById("navigationkkk");
//         localStorage.setItem(
//           "nameOfPerson",
//           JSON.stringify([reg_std_db[i].firstname, reg_std_db[i].lastname])
//         );

//         btn1.style.display = "none";
//         btn2.style.display = "none";
//         anc1.href = "https://learn.masaischool.com/app/dashboard";
//         name.innerHTML = reg_std_db[i].firstname;
//         signout.innerHTML = "Sign Out";
//         anc1.append(signout);
//         anc1.setAttribute("id", "signOut");
//         addItInNevbar.append(name, anc1);
//         email.value = "";
//         password.value = "";
//         popnow(); // calls popnow function if login successful
//       }
//     }
//     if (!isTrue) {
//       alert("Enter Correct Details or Signup");
//       email.value = "";
//       password.value = "";
//     }
//   }
// }
// for pop
function popnow() {
  console.log("called");
  document.querySelector(".popup").classList.add("active");
  document
    .querySelector(".popup .close-btn")
    .addEventListener("click", function () {
      document.querySelector(".popup").classList.remove("active");
    });

  // test
  let resume_submit = document.getElementById("resume_submit");
  resume_submit.addEventListener("click", function () {
    window.location.href = "resumePage.ejs";
  });
}
