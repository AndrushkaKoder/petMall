let dogs = document.querySelector(".dog_categry")
let cats = document.querySelector(".cat_categry")
let acs = document.querySelector(".acs_categry")

let active_dog = document.querySelector(".active_dog_category")
let active_cat = document.querySelector(".active_cat_category")
let active_acs = document.querySelector(".active_acs_category")


// let animals = [dogs, cats, acs]
// let activate = [active_dog, active_cat, active_acs]

active_cat.addEventListener("click", function(e){
    if(e.target === this){
        e.preventDefault()
        
       cats.classList.add("active")
       dogs.classList.add("none")
       acs.classList.remove("active")
       this.classList.add("active_now")
       active_dog.classList.remove("active_now")
       active_acs.classList.remove("active_now")
       
       
    }
})

active_acs.addEventListener("click", function(e){
    
    if(e.target === this){
        e.preventDefault()
        acs.classList.add("active")
        dogs.classList.add("none")
        cats.classList.remove("active")

        this.classList.add("active_now")
        active_dog.classList.remove("active_now")
        active_cat.classList.remove("active_now")
    }
})

active_dog.addEventListener("click", function(e){
    e.preventDefault()
    if(e.target === this){
        dogs.classList.remove("none")
        cats.classList.remove("active")
        acs.classList.remove("active")

        this.classList.add("active_now")
        active_cat.classList.remove("active_now")
        active_acs.classList.remove("active_now")


    }
})

// ======

let header_light = document.querySelector(".header_light")
let header = document.querySelector(".header")

window.addEventListener("scroll", function(e){
    if(this.window.scrollY > 250){
      header_light.classList.add("active_header_light")
    } else if(this.window.scrollY < 200){
        header_light.classList.remove("active_header_light")
    }
    }
)


let burger = document.querySelector(".burger_btn")
let cross = document.querySelector(".cross")
let menu_mobile = document.querySelector(".nav_menu_mobile")

burger.addEventListener("click", function(e){
    if(e.target == this){
        menu_mobile.classList.add("open_burger")
    }
})

cross.addEventListener("click", function(e){
    if(e.target == this){
        menu_mobile.classList.remove("open_burger")
    }
})
   


