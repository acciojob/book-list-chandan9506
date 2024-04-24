//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const bookForm = document.getElementById("book-form");
    const bookList = document.getElementById("book-list");
  
    // Function to add a book to the table
    function addBook(title, author, isbn) {
      // Create new row
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
      `;
      // Append new row to book list
      bookList.appendChild(newRow);
    }
  
    // Event listener for form submission
    bookForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const title = document.getElementById("title").value;
      const author = document.getElementById("author").value;
      const isbn = document.getElementById("isbn").value;
      addBook(title, author, isbn);
      // Clear form fields after adding book
      bookForm.reset();
    });
  
    // Event listener for delete button
    bookList.addEventListener("click", function(event) {
      if (event.target.classList.contains("delete")) {
        event.target.closest("tr").remove();
      }
    });
  });
