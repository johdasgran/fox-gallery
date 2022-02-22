import { register_image } from "./lazy.js";

const min = 1;
const max = 123;
const randomfox = () => {
  let random = Math.floor(Math.random() * (max - min) - min);
  random == 0 || random < 0 ? (random = 1) : "";
  return random;
};

console.log(randomfox());

const container_images = document.querySelector("#images");

const create_imagen = () => {
  const container_imagen = document.createElement("div");
  container_imagen.className = "bg-gris";

  const imagen = document.createElement("img");
  imagen.dataset.src = `https://randomfox.ca/images/${randomfox()}.jpg`;
  imagen.width = "320";
  imagen.className = "img ";

  container_imagen.appendChild(imagen);

  return container_imagen;
};

const add_image = document.querySelector("#add_image");

const action = () => {
  const new_imagen = create_imagen();
  container_images.append(new_imagen);
  register_image(new_imagen);
};

add_image.addEventListener("click", action);
