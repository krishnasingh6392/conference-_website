const images = [
  "./images/old_adminstrative_block_img.jpg",
  "./images/itca_department_img.jpg",

  "./images/campus_img.jpg",
  "./images/adminstrative_block.jpg",
];

let index = 0;

function nextimage() {
  const image = document.getElementById("slider_image");

  image.src = images[index];

  index = (index + 1) % images.length;
}

setInterval(nextimage, 4000);
let bgColors = [
  "bg-red-100",
  "bg-blue-100",
  "bg-green-100",
  "bg-red-100",
  "bg-orange-100",
];
let currentColorIndex = 0;

function toggleDarkMode() {
  document.body.classList.remove(bgColors[currentColorIndex]);

  currentColorIndex = (currentColorIndex + 1) % bgColors.length;

  document.body.classList.add(bgColors[currentColorIndex]);
}

const ham_burger=document.getElementById("ham_burger")
ham_burger.addEventListener('click',()=>{
    const navBar = document.getElementById('nav_bar');
     navBar.classList.toggle('hidden');
})
