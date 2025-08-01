const skillsTitle = "What I Can Do ?";
const skillsDescription = "I’ve helped clients turn rough ideas into live websites, focusing not just on looks, but on making sure everything works smoothly across devices. Here are some of the technologies I'm comfortable with and have experience using in web development.";

const techStacks = {
  frontend: [
    {
      name: "HTML",
      icon: "custom",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      desc: "Semantic and accessible markup",
    },
    {
      name: "CSS",
      icon: "custom",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      desc: "Flexbox, Grid, Media Queries",
    },
    {
      name: "JavaScript",
      icon: "custom",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      desc: "DOM manipulation, ES6+",
    },
    {
      name: "Vue.js",
      icon: "custom",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg",
      desc: "Composition API, reactive components",
    },
    // {
    //   name: "Quasar",
    //   icon: "custom",
    //   src: "assets/icons/quasar.svg",
    //   desc: "Component framework for Vue",
    // },
    {
      name: "React",
      icon: "custom",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      desc: "Component-based SPA",
    },
    {
      name: "Bootstrap",
      icon: "custom",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
      desc: "Popular CSS framework",
    },
    {
      name: "Tailwind CSS",
      icon: "custom",
      src: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      desc: "Utility-first CSS framework",
    },
  ],

  backend: [
    {
      name: "PHP",
      icon: "custom",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
      desc: "Basic CRUD, Forms, Authentication",
    },
    {
      name: "MySQL",
      icon: "custom",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      desc: "Relational DB design",
    },
    {
      name: "Node.js",
      icon: "custom",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      desc: "Server-side JavaScript",
    },
    {
      name: "Python",
      icon: "custom",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      desc: "Scripting and automation",
    },
  ],

  tools: [
    {
      name: "Git",
      icon: "custom",
      src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      desc: "Version control and team collaboration",
    },
    {
      name: "Figma",
      icon: "custom",
      src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      desc: "UI Design to Code Implementation",
    },

    {
      name: "C#",
      icon: "custom",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      desc: "OOP and game dev",
    },
    {
      name: "C++",
      icon: "custom",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      desc: "Low-level programming",
    },
    {
      name: "Unity",
      icon: "custom",
      src: "https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg",
      desc: "Game development platform",
    },
    {
      name: "ChatGPT",
      icon: "custom",
      src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.svg",
      desc: "AI assistant",
    },
  ],
};

const skillsBox = document.getElementById("skillsBox");

// Flatten all stacks into one array
const allStacks = [...techStacks.frontend, ...techStacks.backend, ...techStacks.tools];

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


// ====================================================================================================================================

function openModal(tech) {
  const modal = document.getElementById("customModal");
  const modalBody = document.getElementById("modalBody");

  modalBody.innerHTML = `
    <h3>${tech.name}</h3>
    <img src="${tech.src}" alt="${tech.name}" class="tech-icon" style="width: 80px;">
    <p>${tech.desc}</p>
  `;

  modal.classList.remove("d-none");
}

// Close modal
document.getElementById("modalCloseBtn").addEventListener("click", () => {
  document.getElementById("customModal").classList.add("d-none");
});

// Optional: Close on overlay click
document.querySelector(".custom-modal-overlay").addEventListener("click", () => {
  document.getElementById("customModal").classList.add("d-none");
});

// ====================================================================================================================================

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("customModal");
  const modalBody = document.getElementById("modalBody");
  const closeModalBtn = document.getElementById("modalCloseBtn");

  const showModal = (contentHTML) => {
    modalBody.innerHTML = contentHTML;
    modal.classList.remove("d-none");
    document.body.classList.add("modal-open");
  };

  const hideModal = () => {
    modal.classList.add("d-none");
    modalBody.innerHTML = "";
    document.body.classList.remove("modal-open");
  };

  closeModalBtn.addEventListener("click", hideModal);
  modal.querySelector(".custom-modal-overlay").addEventListener("click", hideModal);

  // Attach modal openers
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

        <div class="skills-preview mt-5">
          ${skillIconsHTML}
        </div>
      </div>
    `);
  });
  
});