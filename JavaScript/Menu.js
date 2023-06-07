function toggleDropdown() {
  var dropdown = document.getElementById("dropdown-menu");
  var body = document.getElementById("body-id");
  body.classList.toggle("blur-[4px]")
  dropdown.classList.toggle("opacity-100");
  dropdown.classList.toggle("pointer-events-none");
  dropdown.classList.toggle("pointer-events-auto");
}