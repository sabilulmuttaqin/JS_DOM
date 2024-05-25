const tombol = document.getElementsByClassName("tombol")[0];
const h1 = document.querySelector("h1");
tombol.addEventListener("click", function () {
  h1.classList.toggle("warnaJudul");
});

const acakwarna = document.createElement("button");
const textWarna = document.createTextNode("warna acak");
acakwarna.appendChild(textWarna);
acakwarna.setAttribute("type", "button");
tombol.after(acakwarna);

acakwarna.style.backgroundColor = "salmon";
acakwarna.style.border = "none";
acakwarna.style.borderRadius = "10px";
acakwarna.style.padding = "10px 17px";
acakwarna.style.color = "white";

acakwarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  sliderMerah.value = r;
  sliderBiru.value = b;
  sliderHijau.value = g;
});

const sliderMerah = document.getElementById("red");
const sliderHijau = document.getElementById("green");
const sliderBiru = document.getElementById("blue");

sliderMerah.addEventListener("input", function () {
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
sliderHijau.addEventListener("input", function () {
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
sliderBiru.addEventListener("input", function () {
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

// document.body.addEventListener("mousemove", function (e) {
//posisi mouse
//   console.log(e.clientX);
//   //ukuran window
//   console.log(window.innerWidth)

//   const xPos = Math.round((e.clientX / window.innerWidth) * 255);
//   const yPos = Math.round((e.clientY / window.innerHeight) * 255);

//   document.body.style.backgroundColor = `rgb(${xPos},${yPos},100)`;
//   sliderMerah.value = xPos;
//   sliderHijau.value = yPos;
//   sliderBiru.value = 0;
// });
