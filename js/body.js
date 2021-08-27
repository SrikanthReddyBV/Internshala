var ArrData = [
  {
    amount: "15000",
    domain: "Marketing",
    duration: "6",
    image:
      "https://internshala.com/cached_uploads/logo%2F60cae5b38ab861623909811.jpg",
    location: "Hydrabad",
    name: "Emoha Eldercare",
  },
  {
    amount: "25000",
    domain: "Accounts",
    duration: "8",
    image:
      "https://internshala.com/cached_uploads/logo%2F60ccb12d8681a1624027437.jpg",
    location: "Bengaluru",
    name: "Medini Research & Analytics",
  },
  {
    amount: "12000",
    domain: "Web Development",
    duration: "4",
    image:
      "https://internshala.com/cached_uploads/logo%2F60f92304d99bf1626940164.jpeg",
    location: "Chennai",
    name: "Speqto Technologies",
  },
  {
    amount: "11000",
    domain: "Data Science",
    duration: "9",
    image:
      "https://internshala.com/cached_uploads/logo%2F5e2fdd3645dbd1580195126.png",
    location: "Mumbai",
    name: "Stotra Media",
  },
  {
    amount: "13000",
    domain: "Android Development",
    duration: "4",
    image:
      "https://internshala.com/cached_uploads/logo%2F5e2fdec6dd76d1580195526.jpg",
    location: "Delhi",
    name: "Spiety Technologies",
  },
  {
    amount: "13000",
    domain: "Big Data",
    duration: "4",
    image:
      "https://internshala.com/cached_uploads/logo%2F5e2fde740bf911580195444.jpg",
    location: "Pune",
    name: "Snooplay",
  },
  {
    amount: "13000",
    domain: "Accounts",
    duration: "4",
    image:
      "https://internshala.com/cached_uploads/logo%2F5fbe45bf4ad171606305215.png",
    location: "Pune",
    name: "Unico",
  },
  {
    amount: "14000",
    domain: "Data Science",
    duration: "5",
    image:
      "https://internshala.com/cached_uploads/logo%2F603a1f70482f41614421872.png",
    location: "Pune",
    name: "Perfect Digital Solution",
  },
  {
    amount: "25000",
    domain: "Web Development",
    duration: "11",
    image:
      "https://internshala.com/cached_uploads/logo%2F60013d423b4c21610693954.png",
    location: "Delhi",
    name: "Quantum Learnings",
  },
  {
    amount: "7000",
    domain: "Web Development",
    duration: "11",
    image:
      "https://internshala.com/cached_uploads/logo%2F5e2fddf3b08e21580195315.jpeg",
    location: "Delhi",
    name: "Ladder India",
    type: "work from home",
  },
  {
    amount: "7000",
    domain: "Data Science",
    duration: "5",
    image:
      "https://internshala.com/cached_uploads/logo%2F604862c5e22a21615356613.png",
    location: "Pune",
    name: "Digitise Today",
    type: "part time",
  },
  {
    amount: "10000",
    domain: "Accounts",
    duration: "8",
    image:
      "https://internshala.com/cached_uploads/logo%2F60f7dd3ec1b4b1626856766.png",
    location: "Delhi",
    name: "Dough & Cream",
  },
  {
    amount: "9000",
    domain: "Web Development",
    duration: "5",
    image:
      "https://internshala.com/cached_uploads/logo%2F5e2fddc2d52a51580195266.png",
    location: "Bengaluru",
    name: "Dignity Software Private Limited",
  },
  {
    amount: "19000",
    domain: "Data Science",
    duration: "8",
    image:
      "https://internshala.com/cached_uploads/logo%2F5e2fde1cab65f1580195356.png",
    location: "Bengaluru",
    name: "Insurgics Health Solution",
  },
  {
    amount: "8000",
    domain: "Web Development",
    duration: "5",
    image:
      "https://internshala.com/cached_uploads/logo%2F60f6fc54d63161626799188.png",
    location: "Chennai",
    name: "Lone Ranger India",
  },
  {
    amount: "9000",
    domain: "Web Development",
    duration: "9",
    image:
      "https://internshala.com/cached_uploads/logo%2F60f6f5278c8b41626797351.png",
    location: "Hydrabad",
    name: "IoTrue Micro Solutions",
  },
  {
    amount: "7000",
    domain: "Accounts",
    duration: "7",
    image:
      "https://internshala.com/cached_uploads/logo%2F60f56b0c043221626696460.png",
    location: "Bengaluru",
    name: "Doctor On Call Private Limited",
  },
  {
    amount: "1000",
    domain: "Accounts",
    duration: "4",
    image:
      "https://internshala.com/cached_uploads/logo%2F60c883cd937ee1623753677.jpg",
    location: "Mumbai",
    name: "Geek Pictures Private Limited",
  },
  {
    amount: "7000",
    domain: "Android Development",
    duration: "8",
    image:
      "https://internshala.com/cached_uploads/logo%2F5e2fdedf15b561580195551.png",
    location: "Mumbai",
    name: "Oddy Labs",
    type: "part time",
  },
  {
    amount: "8900",
    domain: "Accounts",
    duration: "4",
    image:
      "https://internshala.com/cached_uploads/logo%2F5e099a48dd88a1577687624.jpg",
    location: "Bengaluru",
    name: "BASCA Motor Works LLP",
  },
];
// pushed in localstorage
localStorage.setItem("dataOfPage", JSON.stringify(ArrData));

function filterCity(el) {
  return el.location == selected_city.value;
}

function filterDomain(el) {
  return el.domain == "Web Development";
}

function apiData() {
  fetch("http://localhost:2345/internships")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      showContent(data);

      //   console.log("city:", cityId);
    });
}

apiData();
function showContent(input) {
  let data = input;
  var total_internships = document.getElementById("internship_heading");
  total_internships.innerText = `Total internships : ${data.length}`;

  let container = document.getElementById("for_dom");
  container.innerHTML = null;

  for (let i = 0; i < data.length; i++) {
    let main_div = document.createElement("div");
    main_div.className = "dummy";
    let upper_div_with_img = document.createElement("div");
    upper_div_with_img.className = "upper_div_with_img";
    let company_img = document.createElement("img");
    company_img.className = "company_img";
    let industry = document.createElement("div");
    industry.className = "industry";
    let company_name_box = document.createElement("div");
    company_name_box.className = "company_name_box";

    let location_box = document.createElement("div");
    location_box.className = "location_box";
    let details_of_apl = document.createElement("div");
    details_of_apl.className = "details_of_apl";
    let lastDivView = document.createElement("div");
    lastDivView.className = "last_div_view";

    let viewdetails_down = document.createElement("div");
    viewdetails_down.className = "viewdetails_down";

    upper_div_with_img.append(company_img, industry);
    company_img.src = data[i].image;
    industry.innerHTML = data[i].domain.domain;
    company_name_box.innerHTML = data[i].name;
    location_box.innerHTML = `Location: ${data[i].city.city}`;
    details_of_apl.innerHTML = `<div>
                  Start Date<br />
                  Immidiate
                </div>
                <div>
                  Duration<br />
                  ${data[i].duration} months
                </div>
                <div>
                  Stipend<br />
                  ${data[i].amount} per month
                </div>
                <div>
                  Apply By<br />
                  ASAP
                </div>`;

    let workFromHome = document.createElement("span");
    let partTime = document.createElement("span");
    workFromHome.className = "workFromHomeLast";
    partTime.className = "partTimeJob";

    if (data[i].wfh && data[i].part_time) {
      workFromHome.innerHTML = `<span class="material-icons ">home_work</span>`;
      partTime.innerHTML = `<span class="material-icons">
work_outline
</span>`;

      lastDivView.append(workFromHome, partTime, viewdetails_down);
    } else if (data[i].wfh) {
      workFromHome.innerHTML = `<span class="material-icons ">home_work</span>`;
      partTime.innerHTML = `<span class="material-icons">work</span>`;
      lastDivView.append(workFromHome, partTime, viewdetails_down);
    } else {
      partTime.innerHTML = `<span class="material-icons">
work_outline
</span>`;
      lastDivView.append(partTime, viewdetails_down);
    }

    viewdetails_down.innerHTML = `<a href="details.html?id=${data[i]._id}">       View Details ></a>`;

    main_div.append(
      upper_div_with_img,
      company_name_box,
      location_box,
      details_of_apl,
      lastDivView
    );

    container.append(main_div);
  }
  if (data.length == 0) {
    container.innerHTML = "<h1>No Result found!</h1>";
  }
}

var city = document.getElementById("select_city");
city.addEventListener("change", showRightSideContent);
var domain = document.getElementById("select_category");
domain.addEventListener("change", showRightSideContent);

var wfh_check = document.getElementById("wfh_check");

var pt_check = document.getElementById("pt_check");

pt_check.addEventListener("change", showRightSideContent);
wfh_check.addEventListener("change", showRightSideContent);

function showRightSideContent() {
  let selectedOption = city.value;
  let selectDomain = domain.value;

  fetch("http://localhost:2345/internships")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      let mod = data.filter(function filterDomain(el) {
        return el.domain.domain == selectDomain;
      });
      // console.log("mod", mod);
      showContent(mod);

      let modified = mod.filter(function filterCity(el) {
        return el.city.city == selectedOption;
      });
      // console.log("modified", modified);

      showContent(modified);

      if (wfh_check.checked && pt_check.checked) {
        let workFromHomePt = modified.filter(({ wfh, part_time }) => {
          return wfh == true && part_time == true;
        });

        showContent(workFromHomePt);
        // console.log("workFromHomePt:", workFromHomePt);
      } else if (wfh_check.checked) {
        let workFromHome = modified.filter(({ wfh }) => {
          return wfh == true;
        });

        showContent(workFromHome);
        // console.log("workFromHome:", workFromHome);
      } else if (pt_check.checked) {
        let partTime = modified.filter(({ part_time }) => {
          return part_time == true;
        });

        showContent(partTime);
        //console.log("partTime:", partTime);
      }
    });

  // console.log(data);
  // console.log(mod);

  // console.log(selectDomain);

  // if (wfm_check.checked || pt_check.checked) {
  //   modified.pop();
  // }

  // showContent(modified);
  // total_internships.innerText = `Total internships : ${modified.length}`;
}
//showContent(JSON.parse(localStorage.getItem("dataOfPage")));

// // pushed
// let data2 = JSON.parse(localStorage.getItem("dataOfPage"));
// var city = document.getElementById("select_city");
// city.addEventListener("change", showRightSideContent);
// var domain = document.getElementById("select_category");
// domain.addEventListener("change", showRightSideContent);

// var wfm_check = document.getElementById("wfh_check");
// var pt_check = document.getElementById("pt_check");

// var x = Math.round(Math.random() * 500);

// wfm_check.addEventListener("change", () => {
//   let wfm_data = data2.filter((el) => {
//     return el.type == "work from home";
//   });
//   if (wfm_check.checked) {
//     showContent(wfm_data);
//     total_internships.innerText = `Total internships : ${wfm_data.length}`;
//   } else {
//     showContent(data2);
//     total_internships.innerText = `Total internships : ${data2.length}`;
//   }
// });
// pt_check.addEventListener("change", () => {
//   let pt_data = data2.filter((el) => {
//     return el.type == "part time";
//   });

//   if (pt_check.checked) {
//     showContent(pt_data);
//     total_internships.innerText = `Total internships : ${pt_data.length}`;
//   } else {
//     showContent(data2);
//     total_internships.innerText = `Total internships : ${data2.length}`;
//   }
// });

// function showRightSideContent() {
//   let selectedOption = city.value;
//   let selectDomain = domain.value;

//   let data = JSON.parse(localStorage.getItem("dataOfPage"));
//   let mod = data.filter(function filterDomain(el) {
//     return el.domain == selectDomain;
//   });

//   showContent(mod);

//   let modified = mod.filter(function filterCity(el) {
//     return el.location == selectedOption;
//   });
//   if (wfm_check.checked || pt_check.checked) {
//     modified.pop();
//   }

//   showContent(modified);
//   total_internships.innerText = `Total internships : ${modified.length}`;
// }

// // for testing purpose only. edit made by srikanth

// if (localStorage.getItem("homesearch") != null) {
//   let e = JSON.parse(localStorage.getItem("homesearch")).searched_item;

//   let data = JSON.parse(localStorage.getItem("dataOfPage"));
//   let modified = data.filter(function (el) {
//     return el.location == e || el.domain == e;
//   });

//   showContent(modified);
//   total_internships.innerText = `Total internships : ${modified.length}`;

//   localStorage.removeItem("homesearch");
// } else {
//   showContent(JSON.parse(localStorage.getItem("dataOfPage")));
// }
