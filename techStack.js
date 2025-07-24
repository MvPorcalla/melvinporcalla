// techStack.js

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
    {
      name: "Quasar",
      icon: "custom",
      src: "assets/icons/quasar.svg",
      desc: "Component framework for Vue",
    },
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
      name: "Cypress",
      icon: "custom",
      src: "assets/icons/cypress.svg",
      desc: "End-to-End Testing",
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

function renderSkills(containerId) {
  const container = document.getElementById(containerId);

  // Compact View (icons)
  const previewDiv = document.createElement("div");
  previewDiv.className = "skills-preview";

  for (const category of Object.values(techStacks)) {
    category.forEach((tech) => {
      const icon = document.createElement("img");
      icon.src = tech.src || "./assets/images/mv_Icon.png";
      icon.alt = tech.name;
      icon.title = tech.name;
      icon.classList.add("tech-icon");

      // Fallback for broken images
      icon.onerror = () => {
        icon.src = "./assets/images/mv_Icon.png";
      };

      previewDiv.appendChild(icon);
    });
  }

  container.appendChild(previewDiv);

  // Full Detail View
  const detailDiv = document.createElement("div");
  detailDiv.className = "skills-detail d-none mt-4";

  const row = document.createElement("div");
  row.className = "row";

  for (const [category, techs] of Object.entries(techStacks)) {
    const col = document.createElement("div");
    col.className = "col-md-4";
    const heading = document.createElement("h6");
    heading.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    col.appendChild(heading);

    const ul = document.createElement("ul");
    techs.forEach((tech) => {
      const li = document.createElement("li");
      li.textContent = `${tech.name} - ${tech.desc}`;
      ul.appendChild(li);
    });

    col.appendChild(ul);
    row.appendChild(col);
  }

  detailDiv.appendChild(row);
  container.appendChild(detailDiv);
}

document.addEventListener("DOMContentLoaded", () => {
  renderSkills("skillsBox");
  setupExpandableBoxes(); // your existing expand logic
});
