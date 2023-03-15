const form = document.querySelector(".information-form");
const alertbox = document.querySelector(".alertdiv");
const alerttoggle = document.querySelector(".alert-toggle");
const alertwarning = document.querySelector(".alertwarning");
const herodiv = document.querySelector(".hero");
const herotext = document.querySelector(".herotext");
const imgsources = ["background-image:url(1.jpg);","background-image:url(2.jpg);", "background-image:url(3.jpg);","background-image:url(4.jpg);"]
const herobrandings = ["design for yourself","Prove Yourself","Show them","It is a right Path"];
const dots = document.querySelectorAll(".dots");
let index = 0;
let imgindex = 0 ;
setInterval(() => {
    index= (index+1) % herobrandings.length;
    imgindex = (imgindex+1) % imgsources.length;
    herodiv.setAttribute("style",imgsources[imgindex]);
    herotext.textContent = herobrandings[index];
    dots[index].style.color ="white";
    setTimeout(() => {
      dots[index].style.color = "darkgrey"
    }, 2960);

  }, 3000);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const client = form.clientname;
  const email = form.clientemail;
  const description = form.clientdescription;
  function check(input) {
    alerttoggle.addEventListener("click", () => {
      alertbox.classList.remove("d-flex");
      input.style.outline = "none";
    });
    if (input.value === "") {
      alertbox.classList.add("d-flex");
      alertwarning.textContent = "Form is unfilled";
      input.style.outline = "1px solid red";
    }
  }
  check(client);
  check(email);
  check(description);
});
