$("#githubrepo").on("click", function() {
  window.location = "https://github.com/KaitlynCarlson";
});
$("#linkedin").on("click", function() {
  window.location = "https://www.linkedin.com/in/kaitlynannecarlson";
});
$("#email").on("click", function() {
  $(".emaildropdowncontent").css("display", "block");
  $(".phonedropdowncontent").css("display", "none");
});
$("#chooseyourownadventurerepo").on("click", function() {
  window.location = "https://github.com/KaitlynCarlson/Project-One";
});
$("#weatherrepo").on("click", function() {
  window.location = "https://github.com/KaitlynCarlson/Weather-Dashboard";
});

$("#dayplannerrepo").on("click", function() {
  window.location = "https://github.com/KaitlynCarlson/Work-Day-Planner";
});
$("#randompasswordgeneratorrepo").on("click", function() {
  window.location = "https://github.com/KaitlynCarlson/PasswordGenerator";
});
$("#phone").on("click", function() {
  $(".phonedropdowncontent").css("display", "block");
  $(".emaildropdowncontent").css("display", "none");
});
$("#adventure").on("click", function() {
  window.location = "https://kaitlyncarlson.github.io/Project-One/";
});
$("#weather").on("click", function() {
  window.location = "https://kaitlyncarlson.github.io/Weather-Dashboard/";
});
$("#dayplanner").on("click", function() {
  window.location = "https://kaitlyncarlson.github.io/Work-Day-Planner/";
});
$("#randompassword").on("click", function() {
  window.location = "https://kaitlyncarlson.github.io/PasswordGenerator/";
});
AOS.init({
  duration: 2400
});
