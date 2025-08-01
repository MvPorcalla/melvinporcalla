// Initialize global variables to store modal content
let skillsTitle = "", 
    skillsDescription = "", 
    allStacks = [];

// Function to display modal with dynamic content
const showModal = (html) => {
  const modal = document.getElementById("customModal");
  document.getElementById("modalBody").innerHTML = html;
  modal.classList.remove("d-none"); // Show modal
  document.body.classList.add("modal-open"); // Prevent background scrolling
};

// Function to hide modal and clear its content
const hideModal = () => {
  document.getElementById("customModal").classList.add("d-none"); // Hide modal
  document.getElementById("modalBody").innerHTML = ""; // Clear modal content
  document.body.classList.remove("modal-open"); // Allow background scrolling again
};

// Event listeners for closing the modal via close button or clicking the overlay
document.getElementById("modalCloseBtn").addEventListener("click", hideModal);
document.querySelector(".custom-modal-overlay").addEventListener("click", hideModal);

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // Load skills data from JSON
  fetch('./modalContent-skills.json')
    .then(res => res.json())
    .then(data => {
      // Store title and description
      skillsTitle = data.skillsInfo.title;
      skillsDescription = data.skillsInfo.description;

      // Combine all tech stacks: frontend, backend, tools
      allStacks = [...data.frontend, ...data.backend, ...data.tools];

      // Create container for skills preview icons
      const container = document.createElement("div");
      container.className = "skills-preview";

      // Generate image elements for each tech stack
      allStacks.forEach((tech, i) => {
        const img = document.createElement("img");
        img.src = tech.src;
        img.alt = tech.name;
        img.className = "tech-icon";
        img.setAttribute("data-index", i);
        container.appendChild(img);
      });

      // Append generated tech icons to the DOM
      document.getElementById("skillsBox").appendChild(container);
    });

  // Load experience preview and insert into Bootstrap carousel
  fetch('./modalContent-expi.json')
    .then(res => res.json())
    .then(data => {
      const carouselInner = document.querySelector("#carouselSkills .carousel-inner");
      carouselInner.innerHTML = ""; // Clear existing content

      // Create a carousel item for each experience
      data.experiences.forEach((exp, i) => {
        const items = exp.description.map(item => `<li>${item}</li>`).join("");
        carouselInner.innerHTML += `
          <div class="carousel-item ${i === 0 ? "active" : ""}">
            <div class="d-block w-100 text-start px-3 py-2">
              <strong>${exp.company}</strong><br>${exp.role}<br><em>${exp.duration}</em>
              <ul class="mt-2 ps-3 mb-0 small">${items}</ul>
            </div>
          </div>`;
      });
    });

  // Open modal showing full experience details when experience section is clicked
  document.querySelector(".profile-experience").addEventListener("click", () => {
    fetch('./modalContent-expi.json')
      .then(res => res.json())
      .then(data => {
        const all = data.experiences.map(exp => `
          <div class="experience-slide p-3 mb-4 text-start border-bottom">
            <h5>${exp.company}</h5>
            <p><strong>${exp.role}</strong><br>${exp.duration}</p>
            <ul>${exp.description.map(item => `<li>${item}</li>`).join("")}</ul>
          </div>`).join("");
        showModal(`<h4>Experience</h4><div class="modal-fullscreen">${all}</div>`);
      });
  });

  // Open modal showing full skills details when skills section is clicked
  document.querySelector(".profile-skills").addEventListener("click", () => {
    const content = `
      <div class="modal-fullscreen">
        <h2 class="skills-title">${skillsTitle}</h2>
        <p class="skills-desc">${skillsDescription}</p>
        <div class="modal-skills-preview mt-5">
          ${allStacks.map(tech => `
            <div class="skill-box">
              <img src="${tech.src}" alt="${tech.name}" title="${tech.name} - ${tech.desc}" class="tech-icon"/>
            </div>`).join("")}
        </div>
      </div>`;
    showModal(content);
  });
});
