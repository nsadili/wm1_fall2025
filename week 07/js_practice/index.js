const ps = document.getElementsByTagName('p')

for (let i = 0; i < ps.length; i++)
    if (i % 2 == 0)
        ps[i].style.color = 'blue'
    else
        ps[i].classList.add('yellow-text')


const myFavBooks = document.querySelectorAll('.fav-books li')

for (const myFavBook of myFavBooks) {
    myFavBook.classList.toggle('large-text')
}