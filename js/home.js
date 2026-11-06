const txt =
  "sekumpulan mahasiswa yang berdedikasi menghadirkan inovasi di bidang teknologi... Melalui proyek Kelasik 1.0.Cek Kelompok kami YU!!";
let i = 0;
const heroText = document.querySelector(".hero-section p");

function typeWriter() {
  if (i < txt.length) {
    heroText.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 35);
  }
}

if (heroText) {
  heroText.innerHTML = "";
  typeWriter();
}
