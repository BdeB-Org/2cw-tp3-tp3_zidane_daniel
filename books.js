document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.example.com/books')
        .then(response => response.json())
        .then(data => {
            let bookList = document.getElementById('book-list');
            data.forEach(book => {
                let listItem = document.createElement('li');
                listItem.textContent = book.title + ' by ' + book.author;
                bookList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching books:', error));
});
