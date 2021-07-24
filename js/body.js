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
  },
  {
    amount: "7000",
    domain: "Data Science",
    duration: "5",
    image:
      "https://internshala.com/cached_uploads/logo%2F604862c5e22a21615356613.png",
    location: "Pune",
    name: "Digitise Today",
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

function showContent(input) {
  let data = input;

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
    let viewdetails_down = document.createElement("div");
    viewdetails_down.className = "viewdetails_down";
    upper_div_with_img.append(company_img, industry);
    company_img.src = data[i].image;
    industry.innerHTML = data[i].domain;
    company_name_box.innerHTML = data[i].name;
    location_box.innerHTML = `Location: ${data[i].location}`;
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

    viewdetails_down.innerHTML = `<a href="details.html">View Details ></a>`;
    main_div.append(
      upper_div_with_img,
      company_name_box,
      location_box,
      details_of_apl,
      viewdetails_down
    );

    container.append(main_div);
  }
  if (data.length == 0) {
    container.innerHTML = "<h1>No Result found!</h1>";
  }
}

// showContent(JSON.parse(localStorage.getItem("dataOfPage")));

// pushed

var city = document.getElementById("select_city");
city.addEventListener("change", showRightSideContent);
var domain = document.getElementById("select_category");
domain.addEventListener("change", showRightSideContent);

var wfm_check = document.getElementById("wfh_check");
var pt_check = document.getElementById("pt_check");
var total_internships = document.getElementById("internship_heading");
var x = Math.round(Math.random() * 500);
total_internships.innerText = `Total internships : ${x}`;
pt_check.addEventListener("change", showRightSideContent);
wfm_check.addEventListener("change", showRightSideContent);

function showRightSideContent() {
  let selectedOption = city.value;
  let selectDomain = domain.value;

  console.log(wfm_check.checked);
  console.log(pt_check);

  let data = JSON.parse(localStorage.getItem("dataOfPage"));
  let mod = data.filter(function filterDomain(el) {
    return el.domain == selectDomain;
  });
  // console.log(data);
  // console.log(mod);

  showContent(mod);
  console.log(selectDomain);

  let modified = mod.filter(function filterCity(el) {
    return el.location == selectedOption;
  });
  if (wfm_check.checked || pt_check.checked) {
    modified.pop();
  }

  showContent(modified);
  total_internships.innerText = `Total internships : ${modified.length}`;
}

// for testing purpose only. edit made by srikanth

if (localStorage.getItem("homesearch") != null) {
  let e = JSON.parse(localStorage.getItem("homesearch")).searched_item;

  let data = JSON.parse(localStorage.getItem("dataOfPage"));
  let modified = data.filter(function (el) {
    return el.location == e || el.domain == e;
  });

  showContent(modified);
  total_internships.innerText = `Total internships : ${modified.length}`;

  localStorage.removeItem("homesearch");
} else {
  showContent(JSON.parse(localStorage.getItem("dataOfPage")));
}
