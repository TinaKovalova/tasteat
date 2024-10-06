

// const details = document.querySelectorAll(".menu__details-block");
// console.log(details)
// if (details.length > 0) {
//     for (let i = 0; i < details.length; i++){
//         console.log(details[i]);
//         const sammary = details[i].querySelector("summary");
//         sammary.addEventListener("click", (e) => {
//                    e.preventDefault();
//             details[i].classList.toggle('_open');
//             console.log(
//                 details[i].shadowRoot
//             );
//             details[i].shadowRoot.querySelector('#details-content')
//             //   "content-visibility: hidden; display: block;";

          
               

//           });

//     }
// }

const burgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector(".burger-menu");
const forms = document.forms;

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
 

 





