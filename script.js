const edu = document.getElementById("edu");
const skills = document.getElementById("skills");
const project = document.getElementById("project");
const activities = document.getElementById("activities");
const certification = document.getElementById("certification");
const home = document.getElementById("home");

const eduBtn = document.getElementById("edu-btn");
const skillsBtn = document.getElementById("skills-btn");
const projectBtn = document.getElementById("project-btn");
const activitiesBtn = document.getElementById("activities-btn");
const certificationBtn = document.getElementById("certification-btn");

eduBtn.addEventListener("click", () => {
    edu.style.display = "flex";
    skills.style.display = "none";
    project.style.display = "none";
    activities.style.display = "none";
    certification.style.display = "none";
    home.style.display = "none";

    eduBtn.classList.add("active");
    skillsBtn.classList.remove("active");
    projectBtn.classList.remove("active");
    activitiesBtn.classList.remove("active");
    certificationBtn.classList.remove("active");
});


skillsBtn.addEventListener("click", () => {
    edu.style.display = "none";
    skills.style.display = "flex";
    project.style.display = "none";
    activities.style.display = "none";
    certification.style.display = "none";
    home.style.display = "none";

    eduBtn.classList.remove("active");
    skillsBtn.classList.add("active");
    projectBtn.classList.remove("active");
    activitiesBtn.classList.remove("active");
    certificationBtn.classList.remove("active");
});

projectBtn.addEventListener("click", () => {
    edu.style.display = "none";
    skills.style.display = "none";
    project.style.display = "flex";
    activities.style.display = "none";
    certification.style.display = "none";
    home.style.display = "none";

    eduBtn.classList.remove("active");
    skillsBtn.classList.remove("active");
    projectBtn.classList.add("active");
    activitiesBtn.classList.remove("active");
    certificationBtn.classList.remove("active");
});

activitiesBtn.addEventListener("click", () => {
    edu.style.display = "none";
    skills.style.display = "none";
    project.style.display = "none";
    activities.style.display = "flex";
    certification.style.display = "none";
    home.style.display = "none";

    eduBtn.classList.remove("active");
    skillsBtn.classList.remove("active");
    projectBtn.classList.remove("active");
    activitiesBtn.classList.add("active");
    certificationBtn.classList.remove("active");
});

certificationBtn.addEventListener("click", () => {
    edu.style.display = "none";
    skills.style.display = "none";
    project.style.display = "none";
    activities.style.display = "none";
    certification.style.display = "flex";
    home.style.display = "none";

    eduBtn.classList.remove("active");
    skillsBtn.classList.remove("active");
    projectBtn.classList.remove("active");
    activitiesBtn.classList.remove("active");
    certificationBtn.classList.add("active");
});
