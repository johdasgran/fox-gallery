const isIntersecting = (entry) => {
  return entry.isIntersecting; // True or false if it is inside the screen
};

const load_image = (entry) => {
  const container = entry.target;
  const imagen = container.firstChild;
  const url = imagen.dataset.src;
  // load image
  imagen.src = url;

  observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(load_image);
});

export const register_image = (imagen) => {
  // IntersectionObserver -> observer(imagen)
  observer.observe(imagen);
};
