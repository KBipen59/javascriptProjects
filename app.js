// setting the date in footer
const date = document.querySelector('.date')
date.innerHTML = new Date().getFullYear()

// ham bar button

const hambutton = document.querySelector('.nav-toggle')
const navContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')


hambutton.addEventListener('click', function(){
   const containerHeight = navContainer.getBoundingClientRect().height
   const linksHeight = links.getBoundingClientRect().height

   if(containerHeight == 0){
       navContainer.style.height = `${linksHeight}px`
   }else{
    navContainer.style.height = 0
   }
})


// setting the nav bar fixed when scroll
const navbar = document.querySelector('#nav')
const topLink = document.querySelector('.top-link')

window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset
    const navHeight = navbar.getBoundingClientRect().height
    console.log(navHeight)

    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav')
    }else {
        navbar.classList.remove('fixed-nav')
    }
// top scroll button
    if(scrollHeight > 300){
        topLink.classList.add('show-link')

    }else{
        topLink.classList.remove('show-link')
    }
})


// smooth scrolling 

const scrollLinks = document.querySelectorAll('.scroll-links')

scrollLinks.forEach((link)=>{
    link.addEventListener('click', function(e){
        e.preventDefault()
        // navigate to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id)
        //calculate the heights
        const navHeight = navbar.getBoundingClientRect().height
        const containerHeight = navContainer.getBoundingClientRect().height
        const fixedNav = navbar.classList.contains('fixed-nav')
        //getting the top position of the element in px - navheight
        let position = element.offsetTop-navHeight
        console.log(position)
        // console.log(navHeight)
        // console.log(position) 
        //scroll to the position
        if(!fixedNav){
            position = position-navHeight
        }
        if(navHeight > 82){
            position = position+containerHeight
        }
        
        window.scrollTo({
            left:0,
            top : position
        })
        navContainer.style.height = 0
    })
})