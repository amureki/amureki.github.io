const filters = document.querySelector(".filters");
const projects = [...document.querySelectorAll("[data-category]")];
filters.hidden = false;
filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  const selected = button.dataset.filter;
  filters.querySelectorAll("button").forEach((item) => {
    item.setAttribute("aria-pressed", item === button);
  });
  let count = 0;
  projects.forEach((project) => {
    project.hidden =
      selected !== "All" && project.dataset.category !== selected;
    if (!project.hidden) count++;
  });
  document.querySelector("#project-count").textContent =
    `${count} ${count === 1 ? "project" : "projects"}`;
});
