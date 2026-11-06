
const sections = document.querySelectorAll(".page-section");
const menuLinks = document.querySelectorAll("aside nav a[data-section]");

function showSection(id) {
  if (!document.getElementById(id)) id = "tim"; 
  sections.forEach((sec) => sec.classList.toggle("active", sec.id === id));
  menuLinks.forEach((link) =>
    link.classList.toggle("active", link.dataset.section === id),
  );
}

menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.dataset.section;
    history.pushState(null, "", "#" + id);
    showSection(id);
  });
});

window.addEventListener("popstate", () =>
  showSection(location.hash.slice(1)),
);


showSection(location.hash.slice(1) || "tim");


const modal = document.getElementById("memberModal");
const closeBtn = document.querySelector(".close-btn");
const viewMoreButtons = document.querySelectorAll(".card-alnov a");

viewMoreButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const card = this.closest(".card-alnov");

    document.getElementById("modalImg").src = card.querySelector("img").src;
    document.getElementById("modalName").innerText = card.querySelector("h4").innerText;
    document.getElementById("modalRole").innerText = card.querySelector("small").innerText;
    document.getElementById("modalDesc").innerText = card.querySelector("p").innerText;
    document.getElementById("modalNim").innerText = this.dataset.nim;
    document.getElementById("modalProdi").innerText = this.dataset.prodi;
    document.getElementById("modalHobi").innerText = this.dataset.hobi;

    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => (modal.style.display = "none"));
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});


const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("cName").value.trim();
  formStatus.textContent = `Terima kasih, ${name}! Pesan kamu sudah kami terima.`;
  contactForm.reset();
  setTimeout(() => (formStatus.textContent = ""), 5000);
});