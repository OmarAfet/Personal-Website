const projects = [
	{
		title: "CoderHub",
		description: "CoderHub Solutions is a compilation of my coding challenge solutions from CoderHub. It's a valuable resource for learning and enhancing coding skills. Explore the repository to find solutions to various challenges and stay updated with new additions.",
		link: "https://github.com/OmarAfet/CoderHub",
	},
	{
		title: "Password Generator",
		description: "Password Generator with Blacklist: My first project, igniting my programming journey. This command-line tool creates secure passwords and allows custom blacklist settings. Overcame challenges, fueled passion for programming.",
		link: "https://github.com/OmarAfet/Password-Generator",
	},
];

// Function to generate the HTML for each project
function generateProjectHTML(project) {
	return `
    <div class="flex-1 flex gap-[32px] flex-col justify-between p-[24px] bg-[#dadad9] dark:bg-[#252526] rounded-xl shadow-lg ease-in-out relative duration-500 top-0 hover:-top-2 transition-all">
      <div class="max-lg:text-[16px] text-[32px] font-[600]">${project.title}</div>
      <div class="max-lg:text-[12px] text-[16px]">${project.description}</div>
      <a target="_blank" href="${project.link}" class="bg-[#cccccc] hover:shadow-lg dark:bg-[#333333] px-[12px] py-[8px] rounded-[4px] cursor-pointer font-[600]">view</a>
    </div>
  `;
}

// Get the container element to append the projects
const container = document.getElementById("projects-container");

// Generate and append the HTML for each project
projects.forEach((project) => {
	const projectHTML = generateProjectHTML(project);
	container.innerHTML += projectHTML;
});
