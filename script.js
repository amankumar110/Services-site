const form = document.querySelector(".information-form");
const alertbox = document.querySelector(".alertdiv");
const alerttoggle = document.querySelector(".alert-toggle");
const alertwarning = document.querySelector(".alertwarning")

// if (client.value ==="" || email.value ==="" || description.value ==="") {
//     alert("something is not filled")
// }

form.addEventListener("submit",(e)=>{
        e.preventDefault();
        const client = form.clientname;
const email = form.clientemail;
const description = form.clientdescription;
        function check(input){
            alerttoggle.addEventListener("click",()=>{
                alertbox.classList.remove("d-flex");
                input.style.outline = "none";
             });
             
            if (input.value ==="") {
                alertbox.classList.add("d-flex");
                alertwarning.textContent = "Form is unfilled";
                input.style.outline ="1px solid red";
            } 
        }
        check(client);
        check(email);
        check(description);
})
