const upBtn = document.querySelector(".up-btn");
const burgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector(".navigation");
const header = document.querySelector(".header");
const forms = document.forms;

window.addEventListener("scroll", () => {
  document.documentElement.scrollTop > 20 
    ? (upBtn.style.visibility = "visible")
    : (upBtn.style.visibility = "hidden");
  
})
upBtn.addEventListener("click", () => {
  document.documentElement.scrollIntoView({
     behavior:"smooth"
  });
})

burgerBtn.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("burger-btn--active");
  burgerMenu.classList.toggle("burger-menu--active");
});

burgerMenu.addEventListener("click", (e) => {
  if (e.target.closest("[class$='__link']")) {
    burgerBtn.classList.toggle("burger-btn--active");
    burgerMenu.classList.toggle("burger-menu--active");
  }
});

nav.addEventListener('click', (e) => {
  const target = e.target;
  if (target.closest(".navigation__link")) {
    e.preventDefault();
    const elementId = target.dataset.destination;
    const step = window.innerWidth < 992 ? header.offsetHeight : 0;
    const targetElementTop = document.querySelector(`#${elementId}`).offsetTop -step;
     window.scrollTo({
      top: targetElementTop,
      left: 0,
      behavior:"smooth"
    })
  }
})

const reservationForm = forms?.reservation;
if (reservationForm) {
     const placeholders = { time: "Timing", date: "Date" };

  reservationForm.addEventListener("change", (e) => {
    e.target.classList.toggle("_has-value", e.target.value);
  });

  reservationForm.addEventListener("focusin", (e) => {
    const target = e.target;
    const targetName = target.name;
      if (targetName in placeholders) {
        target.setAttribute("placeholder", "");
      }
  });

   reservationForm.addEventListener("focusout", (e) => {
     const target = e.target;
     const targetName = target.name;
     if (targetName in placeholders) {
       !target.value
         ? target.setAttribute("placeholder", placeholders[targetName])
         : "";
     }
   });
}


 

 





