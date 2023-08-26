const container = document.querySelector(".container"),
      btnAdd = document.querySelectorAll(".showHipe"),
      fields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");


      btnAdd.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=> {
            fields.forEach(field => {
                if (field.type ==="password") {
                    field.type = "text";

                    btnAdd.forEach(icon => {
                        icon.classList.replace("uil uil-eye-slash", "uil-eye");
                    })
                } else {
                    field.type = "password";

                    btnAdd.forEach(icon => {
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            })

        })  
      })


signUp.addEventListener("click", ()=>{
    container.classList.add("active");
});

login.addEventListener("click", ()=>{
    container.classList.remove("active");
});