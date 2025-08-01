let skillsTitle = "";
let skillsDescription = "";
let allStacks = []; // Define globally so it's accessible in multiple places

// Show and hide modal functions moved to global scope
const showModal = (contentHTML) => {
  const modal = document.getElementById("customModal");
  const modalBody = document.getElementById("modalBody");

  modalBody.innerHTML = contentHTML;
  modal.classList.remove("d-none");
  document.body.classList.add("modal-open");
};

const hideModal = () => {
  const modal = document.getElementById("customModal");
  const modalBody = document.getElementById("modalBody");

  modal.classList.add("d-none");
  modalBody.innerHTML = "";
  document.body.classList.remove("modal-open");
};

// Close modal events
document.getElementById("modalCloseBtn").addEventListener("click", hideModal);
document.querySelector(".custom-modal-overlay").addEventListener("click", hideModal);

fetch('./modalContent.json')
  .then(response => response.json())
  .then(data => {
    skillsTitle = data.skillsInfo.title;
    skillsDescription = data.skillsInfo.description;
    allStacks = [...data.frontend, ...data.backend, ...data.tools];

    const skillsBox = document.getElementById("skillsBox");
    const skillsContainer = document.createElement("div");
    skillsContainer.className = "skills-preview";

    allStacks.forEach((tech, index) => {
      const img = document.createElement("img");
      img.src = tech.src;
      img.alt = tech.name;
      img.className = "tech-icon";
      img.style.cursor = "pointer";
      img.setAttribute("data-index", index);
      skillsContainer.appendChild(img);
    });

    skillsBox.appendChild(skillsContainer);
  })
  .catch(err => console.error("Failed to load tech stack JSON", err));

document.addEventListener("DOMContentLoaded", () => {
  // Modal openers
  document.querySelector(".profile-experience").addEventListener("click", () => {
    showModal(`
      <h4>Experience</h4>
      <ul>
        <li><strong>Pixel8 Web Solutions</strong> – Frontend Developer Intern</li>
        <li><strong>Tasks:</strong> UI building, QA, Cypress Testing, GitLab collaboration</li>
      </ul>
    `);
  });

  document.querySelector(".profile-skills").addEventListener("click", () => {
    const skillIconsHTML = allStacks.map(tech => `
      <div class="skill-box">
        <img 
          src="${tech.src}" 
          alt="${tech.name}" 
          title="${tech.name} - ${tech.desc}" 
          class="tech-icon"
        />
      </div>
    `).join("");

    showModal(`
      <div class="modal-fullscreen">
        <h2 class="skills-title">${skillsTitle}</h2>
        <p class="skills-desc">${skillsDescription}</p>
        <div class="modal-skills-preview mt-5">
          ${skillIconsHTML}
        </div>
      </div>
    `);
  });
});
