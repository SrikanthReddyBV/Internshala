// For Home Search bar  (edit made by srikanth)

var searchbox = document.getElementById("home_search");
var btn = document.getElementById("searchIcon");
btn.addEventListener("click", function () {
  let temp = {
    searched_item: searchbox.value,
  };
  localStorage.setItem("homesearch", JSON.stringify(temp));
  window.location.href = "internships.ejs";
});
