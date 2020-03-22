$("#githubrepo").on("click", function() {
  window.open("https://github.com/KaitlynCarlson");
});
$("#linkedin").on("click", function() {
  window.open("https://www.linkedin.com/in/kaitlynannecarlson");
});
$("#email").on("click", function() {
  $(".emaildropdowncontent").css("display", "block");
  $(".phonedropdowncontent").css("display", "none");
});
$("#weatherrepo").on("click", function() {
  window.open("https://github.com/KaitlynCarlson/Weather-Dashboard");
});

$("#dayplannerrepo").on("click", function() {
  window.open("https://github.com/KaitlynCarlson/Work-Day-Planner");
});
$("#randompasswordgeneratorrepo").on("click", function() {
  window.open("https://github.com/KaitlynCarlson/PasswordGenerator");
});
$("#phone").on("click", function() {
  $(".phonedropdowncontent").css("display", "block");
  $(".emaildropdowncontent").css("display", "none");
});

$("#weather").on("click", function() {
  window.open("https://kaitlyncarlson.github.io/Weather-Dashboard/");
});
$("#dayplanner").on("click", function() {
  window.open("https://kaitlyncarlson.github.io/Work-Day-Planner/");
});
$("#randompassword").on("click", function() {
  window.open("https://kaitlyncarlson.github.io/PasswordGenerator/");
});
$("#burgerImg").on("click", function() {
  window.open("https://rocky-dusk-41654.herokuapp.com/");
});
$("#burger").on("click", function() {
  window.open("https://github.com/KaitlynCarlson/burger");
});
$("#mothraImg").on("click", function() {
  window.open("https://the-best-project-manager.herokuapp.com/");
});
$("#mothra").on("click", function() {
  window.open("https://github.com/maximilianc88/Project-Planner-Application");
});
$("#noteTakerImg").on("click", function() {
  window.open("https://note--taker.herokuapp.com/");
});
$("#noteTaker").on("click", function() {
  window.open("https://github.com/KaitlynCarlson/Note-Taker");
});
AOS.init({
  duration: 1000
});
