document.addEventListener("DOMContentLoaded", () => {
	const dropdown = document.getElementById("dropdown-menu");
	const body = document.getElementById("body-id");

	body.addEventListener("click", () => {
		if (dropdown.classList.contains("opacity-100") && !dropdown.classList.contains("pointer-events-none")) {
			toggleDropdown();
		}
	});
});

function toggleDropdown() {
	const dropdown = document.getElementById("dropdown-menu");
	const body = document.getElementById("body-id");

	body.classList.toggle("blur-[4px]");
	body.classList.toggle("select-none");
	dropdown.classList.toggle("opacity-100");
	dropdown.classList.toggle("pointer-events-none");
}
