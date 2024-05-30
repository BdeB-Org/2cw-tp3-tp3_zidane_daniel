document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.example.com/loans')
        .then(response => response.json())
        .then(data => {
            let loanList = document.getElementById('loan-list');
            data.forEach(loan => {
                let listItem = document.createElement('li');
                listItem.textContent = `Book ID: ${loan.book_id}, Loan Date: ${loan.loan_date}, Return Date: ${loan.return_date}`;
                loanList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching loans:', error));
});
