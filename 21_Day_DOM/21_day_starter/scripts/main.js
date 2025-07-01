function myFunction() {
    const allTitles = document.getElementsByTagName('h1')
    console.log("hey!")
    console.log(allTitles) //HTMLCollections
    console.log(allTitles.length) // 4

    let firstTitle = document.querySelectorAll('.title')
    console.log(firstTitle) 

    const titles = document.querySelectorAll('h1')
    console.log(titles)
    
    titles[1].setAttribute('id', 'fourth-title')

    titles[1].classList.add('title', 'header-title')

    
    titles[1].setAttribute('class', 'titleeeee')

}