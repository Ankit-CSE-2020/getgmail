let sumbit=document.querySelector(".sumbit")
let error=document.querySelector(".error")
let img=document.querySelector(".img1")
let form=document.querySelector("form")
let input=document.querySelector(".input")

sumbit.addEventListener("click", check)

form.addEventListener("sumbit", check)

function check(e) {
    e.preventDefault()   //this is use for deafult email error which is come when we put wrong email(in-bilt default error)   ***this method stop that error 
    console.log(e);
   let inputValue=input.value      
   console.log(inputValue) 

   if (!isEmail(inputValue)) {
        error.style.display="block"
        img.style.display="block"
   }
   else{
    error.style.display="none"
    img.style.display="none"
   }
}

function isEmail(inpu) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inpu)
}

