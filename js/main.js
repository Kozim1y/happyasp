const elBurgerBtn = document.querySelector(".burger-btn");
const elNavigationModal = document.querySelector(".nav-modal-box");
elBurgerBtn.addEventListener("click", () => {
	elNavigationModal.classList.add("nav-modal-box__active");
	document.body.style.overflow = "hidden";
});

elNavigationModal.addEventListener("click", (evt) => {
	if (evt.target.matches(".nav-modal-box") || evt.target.matches(".nav-close")) {
		elNavigationModal.classList.remove("nav-modal-box__active");
	  document.body.style.overflow = "visible";
	}
});
const container = document.querySelector('.container-before-after');
document.querySelector('.slider').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
})
