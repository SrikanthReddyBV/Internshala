// const User = require("../../models/user.model");

var signup = document.getElementById("signup_btn");
signup.addEventListener("click", initiateSignup);

async function initiateSignup() {
  if (
    email.value == "" ||
    password.value == "" ||
    firstname.value == "" ||
    lastname.value == ""
  ) {
    alert("Enter all fields");
    email.value = "";
    password.value = "";
    firstname.value = "";
    lastname.value = "";
  } else {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;

    let inputData = {
      firstname,
      lastname,
      password,
      email,
    };
    let isExist = false;
    let res = await fetch("http://localhost:2222/users");
    let registeredUsers = await res.json();

    registeredUsers.forEach((usr) => {
      if (usr.email == inputData.email) {
        isExist = true;
        alert("Email already exists! Please Login");
        window.location.href = "students_log.ejs";
      }
    });

    if (!isExist) {
      let res = await fetch("http://localhost:2222/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });

      let usr = await res.json();
      console.log(usr);
      alert("Signup Success! Please login");
      window.location.href = "students_log.ejs";
    }
  }
  // let arr = [];
  // let reg_std_db = JSON.parse(localStorage.getItem("reg_std_db"));
  // if (reg_std_db == null) {
  //   localStorage.setItem("reg_std_db", JSON.stringify(arr));
  // }
  // reg_std_db = JSON.parse(localStorage.getItem("reg_std_db"));

  //  else {
  //   let temp = {
  //     password: "",
  //     email: "",
  //     firstname: "",
  //     lastname: "",
  //   };
  //   let isNew = true;
  //   for (var i = 0; i < reg_std_db.length; i++) {
  //     if (reg_std_db[i].email == email.value) {
  //       isNew = false;
  //       // alert("User already exist! Please Login");
  //       // window.location.href = "students_log.html";
  //     }
  //   }

  // if (isNew) {
  //   temp.email = email.value;
  //   temp.password = password.value;
  //   temp.firstname = firstname.value;
  //   temp.lastname = lastname.value;

  //   reg_std_db.push(temp);

  //   localStorage.setItem("reg_std_db", JSON.stringify(reg_std_db));

  // alert("Signup Success! Please login");
  // window.location.href = "students_log.ejs";
  //   }
  // }
}
