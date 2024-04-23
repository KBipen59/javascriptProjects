const buttons = document.querySelectorAll('.tab-btn')
const articles = document.querySelectorAll('.content')
const about = document.querySelector('.about')

//adding the event listner to the whole about section
about.addEventListener('click', function(e){
    const id = e.target.dataset.id
    
    if(id){
    //removing the active class from all the buttons and adding active class to the one that is clicked
        buttons.forEach((btn) => {
            btn.classList.remove('active')
            e.target.classList.add('active')
        })
        //hiding other articles
        articles.forEach((article) => {
            article.classList.remove('active')    
        })
        //adding the class active to the articel by checking the dataset value with the id of the content
        const element = document.getElementById(id)
        element.classList.add('active')

    }

    
})