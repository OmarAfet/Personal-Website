function toggleDarkMode() {
	const htmlTag = document.querySelector("html");
	const modeButtons = document.querySelectorAll("#mode-btn");

	htmlTag.classList.toggle("dark");

	if (htmlTag.classList.contains("dark")) {
			modeButtons.forEach((button) => {
					button.textContent = "Light Mode";
			});
			localStorage.setItem("Theme", "Dark");
	} else {
			modeButtons.forEach((button) => {
					button.textContent = "Dark Mode";
			});
			localStorage.setItem("Theme", "Light");
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const htmlTag = document.querySelector("html");
	const modeButtons = document.querySelectorAll("#mode-btn");
	const currentTheme = localStorage.getItem("Theme");
	const isDarkMode = htmlTag.classList.contains("dark");

	if (currentTheme === "Dark" && !isDarkMode) {
			htmlTag.classList.add("dark");
			modeButtons.forEach((button) => {
					button.textContent = "Light Mode";
			});
	} else if (currentTheme === "Light" && isDarkMode) {
			htmlTag.classList.remove("dark");
			modeButtons.forEach((button) => {
					button.textContent = "Dark Mode";
			});
	} else {
			localStorage.setItem("Theme", "Dark");
			modeButtons.forEach((button) => {
					button.textContent = "Light Mode";
			});
	}
});
