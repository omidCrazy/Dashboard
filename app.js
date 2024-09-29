let closeBtn = document.querySelector('.close')
let arrowBtn = document.querySelector('.arrow')
let sideBar = document.querySelector('.sidebar')
let themeBtn = document.querySelector('.theme-btn')
let sidebarLink = document.querySelectorAll('.sidebar-link')
sidebarLink.forEach((link) => {
    link.addEventListener('click' , (e) => {
        

        sidebarLink.forEach((link) => {
            link.classList.remove('selected')
        })

        link.classList.add('selected')

    })
    
})

arrowBtn.addEventListener('click' , function() {
    sideBar.classList.toggle('active')
})

themeBtn.addEventListener('click' , function() {
    document.body.classList.toggle('light')
    if (document.body.classList.contains('light'))
    {
        localStorage.setItem('theme' , 'light')        
    }
    else {
        localStorage.setItem('theme' , 'dark')        
    }
})

let localTheme = localStorage.getItem('theme')

if (localTheme && localTheme == 'light')
{
    document.body.classList.add('light')
}


