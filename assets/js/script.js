//For button animation show
$(".button").click(function () {
  // const modal = $(this).parent().parent().parent().find(".modal-container");
  const modal = $(this).parent().parent().find(".modal-container");
  modal.removeAttr("class").addClass("modal-container show-content");
  $("body").addClass("modal-active");
});

$(".modal-container").click(function () {
  $(this).addClass("out");
  $("body").removeClass("modal-active");
});

// for dropdown content of the questions.
$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
});
var myLink = document.querySelector('a[href="#"]');
myLink.addEventListener("click", function (e) {
  e.preventDefault();
});
