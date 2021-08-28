function slideshow() {
  let slider = [
    "/static/images/get_set_intern_2021-1920-5bb08e.png",
    "/static/images/learn_with_me-1920-5da5b0.png",

    "/static/images/social_issue_camapign_jul21-1920-b70cf7.png",
    "/static/images/year_specific_21-1920-d0c72f.png",
  ];

  let div = document.getElementById("slider");
  let div_1 = document.getElementById("dot");

  let img = document.createElement("img");
  let dot1 = document.getElementById("button2");

  let add = document.createElement("div");
  let add1 = document.createElement("div");
  let add2 = document.createElement("div");
  let add3 = document.createElement("div");
  add.id = "five";

  let i = 0;

  img.src = slider[0];
  img.setAttribute("id", "carasol");

  div.insertBefore(img, dot1);
  if (i == 0) {
    div_1.append(add, add1, add2, add3);
  }

  setInterval(function () {
    img.src = slider[i];
    if (i == 0) {
      div_1.append(add, add1, add2, add3);
    }

    if (i == 1) {
      div_1.append(add1, add, add2, add3);
    }
    if (i == 2) {
      div_1.append(add1, add2, add, add3);
    }
    if (i == 3) {
      div_1.append(add1, add2, add3, add);
    }

    i++;

    if (i == 4) {
      i = 0;
    }
  }, 3000);
}
slideshow();
