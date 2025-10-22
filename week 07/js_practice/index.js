const ps = document.getElementsByTagName('p')

for (let idx = 0; idx < ps.length; idx++) {
    if (idx % 2 == 0)
        ps[idx].style.color = 'yellow'
    else
        ps[idx].classList.add('blue-text')

}


const myFavBooks = document.querySelectorAll('.fav-books li')

// for (let book of myFavBooks) {
//     book.classList.add('large-text')
// }

// myFavBooks.forEach(book => book.classList.add('large-text'))