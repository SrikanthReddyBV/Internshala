var signup = document.getElementById("signup_btn");
signup.addEventListener("click", initiateSignup);

function initiateSignup() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let firstname = document.getElementById("firstname");
  let lastname = document.getElementById("lastname");
  let arr = [];
  let reg_std_db = JSON.parse(localStorage.getItem("reg_std_db"));
  if (reg_std_db == null) {
    localStorage.setItem("reg_std_db", JSON.stringify(arr));
  }
  reg_std_db = JSON.parse(localStorage.getItem("reg_std_db"));

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
    console.log(reg_std_db);
    let temp = {
      password: "",
      email: "",
      firstname: "",
      lastname: "",
    };
    let isNew = true;
    for (var i = 0; i < reg_std_db.length; i++) {
      if (reg_std_db[i].email == email.value) {
        isNew = false;
        alert("User already exist! Please Login");
        window.location.href = "students_log.html";
      }
    }

    if (isNew) {
      temp.email = email.value;
      temp.password = password.value;
      temp.firstname = firstname.value;
      temp.lastname = lastname.value;

      reg_std_db.push(temp);
      console.log(reg_std_db);
      localStorage.setItem("reg_std_db", JSON.stringify(reg_std_db));

      alert("Signup Success! Please login");
      window.location.href = "students_log.html";
    }
  }
}
