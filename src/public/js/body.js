function apiData() {
  fetch("http://localhost:2222/data")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      showContent(data);

      //   console.log("city:", cityId);
    });
}

// apiData();
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
      partTime.innerHTML = `<span class="material-icons">work </span>`;
      lastDivView.append(workFromHome, partTime, viewdetails_down);
    } else {
      partTime.innerHTML = `<span class="material-icons">
work_outline 
</span>`;
      lastDivView.append(partTime, viewdetails_down);
    }

    viewdetails_down.innerHTML = `<a href="details.ejs?id=${data[i]._id}">       View Details ></a>`;

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

  fetch("http://localhost:2222/data")
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
}

// function changeTo(arr) {
//   return arr.split("");
// }

// function mergeAgain(input) {
//   return input.join("");
// }

// function changeCase(input) {
//   let arr = input.split(" ");
//   let arr1 = arr.map(changeTo);

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr1[i].length; j++) {
//       if (arr1[i][0].toUpperCase() != arr1[i][0]) {
//         arr1[i][0] = arr1[i][0].toUpperCase();
//       } else {
//         arr1[i][j] = arr1[i][j].toLowerCase();
//       }
//     }
//   }
//   return arr1.map(mergeAgain).join(" ");
// }

if (localStorage.getItem("homesearch") != null) {
  let e = JSON.parse(localStorage.getItem("homesearch"));

  let str = e.toLowerCase();

  fetch("http://localhost:2222/data")
    .then((res) => res.json())
    .then((data) => {
      let modified = data.filter(function (el) {
        return el.city.city.toLowerCase() == str || el.domain.domain.toLowerCase() == str;
      });
      showContent(modified);
    });

  localStorage.removeItem("homesearch");
} else {
  apiData();
}
