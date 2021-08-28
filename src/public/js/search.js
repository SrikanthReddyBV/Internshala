// For Home Search bar  (edit made by srikanth)

var searchbox = document.getElementById("home_search");
var btn = document.getElementById("searchIcon");
btn.addEventListener("click", function () {
  localStorage.setItem("homesearch", JSON.stringify(searchbox.value));
  window.location.href = "internships.ejs";
});
