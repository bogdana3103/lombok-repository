function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.display === "block") {
    x.display = "none";
  } else {
    x.display = "block";
  }
}

export default myFunction