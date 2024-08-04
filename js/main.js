//buttons
var loginBtn = document.querySelector('#login')
var logoutBtn = document.querySelector("#logout")
var singupBtn = document?.querySelector("#singup")
//inputs
var emailLogin = document.querySelector('#email-login')
var passwordLogin = document.querySelector('#password-login')
var nameSingup = document.querySelector('#name-singup')
var emailSingup = document.querySelector('#email-singup')
var passwordSingup = document.querySelector('#password-singup')
var su =document.querySelector('.s-u') 
var li =document.querySelector('.l-i') 
var registers;
var user;

if (
    localStorage.getItem("user") != null
) {
    user = localStorage.getItem("user")
    open("./home.html" , "_self")
    localStorage.removeItem("user")
    
}


if (
    localStorage.getItem("registers") != null
) {
    registers =
        JSON.parse(localStorage.getItem("registers"));
}
else {
    registers = []
}
singupBtn?.addEventListener("click", function () {
    var register = {
        email: emailSingup.value,
        name: nameSingup.value,
        password: passwordSingup.value,
    }
    var موجود = false
    for (var i = 0; i < registers.length; i++) {
        if (register.email == registers[i].email) {
            موجود = true
        }
    }
    if (emailSingup.value == '' || nameSingup.value == '' || passwordSingup.value == '') {
        console.log("ما تكتب حاجه ياعم الجح عيب")
    }
    else if (موجود == true) {
        console.log("معلش مش هينفع موجود والله قبل كده")
    }
    else {
        registers.push(register)
        localStorage.setItem("registers", JSON.stringify(registers))
        console.log("تمام يارجوله انت بقيت معانا")
        clear()
        console.log(registers)
    }
})
loginBtn?.addEventListener("click", function () {
    
    var شغال = false
    for (var i = 0; i < registers.length; i++) {
        if (emailLogin.value == registers[i].email && passwordLogin.value == registers[i].password) {
            شغال = true;
            user = registers[i].name
        }
    }
    if (emailLogin.value == '' || passwordLogin.value == '') {
        console.log("ما تكتب حاجه ياعم الجح عيب")
    }
    else if (شغال == false) {
        console.log("عندك حاجه غلط يانجم")
    }
    else {
        console.log(`${user}ادخل ياعم بيتك و مترحك يا `)
        clear()
        console.log(user)
        localStorage.setItem("user", user)
        open("./home.html" , "_self")
    }
})
logoutBtn?.addEventListener("click", function () {
    localStorage.removeItem("user")
    console.log("اطلع برا يانرم")
    open("./index.html" , "_self")

})
function clear() {
    emailLogin.value = '';
    passwordLogin.value = '';
    nameSingup.value = '';
    emailSingup.value = '';
    passwordSingup.value = '';
}

li.addEventListener('click' , function () {

    setTimeout( ()=>{
        document.querySelector('.sing-in').classList.toggle('none')

        document.querySelector('.sing-up').classList.toggle('none')
        setTimeout(()=>{
            document.querySelector('.sing-in').classList.remove('op')

        },10)
},1000)
    
document.querySelector('.sing-up').classList.toggle('op')

document.querySelector('.moon').classList.toggle('spen')
document.querySelector('.img').classList.toggle('swap')
    console.log('asdas')
})
su.addEventListener('click' , function () {
    setTimeout( ()=>{

        document.querySelector('.sing-in').classList.toggle('none')
        document.querySelector('.sing-up').classList.toggle('none')
        setTimeout(()=>{
            document.querySelector('.sing-up').classList.remove('op')

        },100)

    },1000)
document.querySelector('.sing-in').classList.add('op')
document.querySelector('.moon').classList.toggle('spen')
document.querySelector('.img').classList.toggle('swap')
    console.log('asdas')
})
