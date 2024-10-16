const myBooks = [
    new Book("The Great Gatsby", "Classic", "F. Scott Fitzgerald", 180, "1925", true, ""),
    new Book("To Kill a Mockingbird", "Classic", "Harper Lee", 281, "1960", true, ""),
    new Book("1984", "Dystopian", "George Orwell", 328, "1949", true, ""),
    new Book("The Catcher in the Rye", "Classic", "J.D. Salinger", 214, "1951", true, ""),
    new Book("The Hobbit", "Fantasy", "J.R.R. Tolkien", 310, "1937", true, ""),
    new Book("Moby Dick", "Adventure", "Herman Melville", 635, "1851", false, ""),
    new Book("Pride and Prejudice", "Romance", "Jane Austen", 279, "2023", true, ""),
    new Book("Harry Potter and the Sorcerer's Stone", "Fantasy", "J.K. Rowling", 309, "1997", true, ""),
    new Book("The Da Vinci Code", "Mystery", "Dan Brown", 689, "2003", true, ""),
    new Book("The Alchemist", "Philosophical", "Paulo Coelho", 208, "1988", true, ""),
    new Book("The Clown", "Comedy", "Paulo Coelho", 320, "1988", true, "")
];

// No está bien que generes el html en javascript
// Que lo tengas ya hecho en el index y le vayas pasando los datos con Query
// Name of each of the genres
const button = document.querySelector(".exercise1Button");
const button2 = document.querySelector(".exercise2Button");
const button3 = document.querySelector(".exercise3Button");
const button4 = document.querySelector(".exercise4Button");

//TODA LA TABLA DEBE ESTAR AL PRINCIPIO

let loadTable = function(){

    const booksDiv = document.querySelector(".books");

    let table = `
    
     <table>
        <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Author</th>
            <th>Page</th>
            <th>Date</th>
            <th>Read</th>
            <th>Web</th>
        </tr>
        
    
    `;

    for (let book of myBooks) {

        table += `<tr><td>
        ${book.title}</td><td>
        ${book.genre}</td></tr>
        <tr><td>${book.author}</td><td>${book.pages}</td></tr>
        <tr>
        
        <td>${book.publishedDate}</td>
        
        <tr><td>${book.read}</td></tr>

        <tr><td>${book.web}</td></tr>`;


    }

    table += `</table>`;

    booksDiv.innerHTML =table;


}

loadTable();

button.addEventListener("click", function () {
    const booksDiv = document.querySelector(".books");
    let table = `All genres <br> <table><tr>`;
    // No quiero los generos repetidos
    let genresSet = new Set(myBooks.map(book => book.genre));
    // Aquí tiene que ser of porque los Set no tienen indices
    for (let i of genresSet) {
        table += `<td>${i}</td>`;
    }
    table += `</tr></table>`;
    booksDiv.innerHTML = table;
});

// Ejercicio2, solo se muestran los nombres y se colorean los que coinciden
button2.addEventListener("click", function () {
    // Titulos de libros con más de 300 páginas
    // Nombre | Género | Autor | Páginas | Año | Leido | Web
    /* <table>
        <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Author</th>
            <th>Pages</th>
            <th>Date</th>
            <th>Read</th>
            <th>Web</th>
        </tr>
        <tr>
            <td>Pesadilla en la cocina</td>
            <td>Comedia</td>
        </tr>
    </table> */
    const booksContainer = document.querySelector(".books");
    let table = `Title of books with more than 300 pages <br>
        <table>
        <tr>
            <th>Title</th>
            <th>Pages</th>
        </tr>`;
    for (let i of myBooks) {
        if (i.pages > 300) {
            table += `<tr><td style="background-color: yellow;">${i.title}</td>
            <td>${i.pages}</td></tr>`;
        } else {
            table += `<tr><td>${i.title}</td>
            <td>${i.pages}</td></tr>`;
        }
    }
    table += `</table>`;
    booksContainer.innerHTML = table;
});

// Ejercicio3, solo se muestran los nombres y se colorean los que coinciden
button3.addEventListener("click", function () {
    const booksContainer = document.querySelector(".books");
    let table = `Title of books published more than 2 years ago <br>
        <table>
        <tr>
            <th>Title</th>
            <th>Release date</th>
        </tr>`;
    const currentYear = new Date().getFullYear();
    for (let book of myBooks) {
        // Compara el año actual con el año de publicación
        if (currentYear - new Date(book.publishedDate).getFullYear() > 2) {
            table += `<tr><td style="background-color: aquamarine;">${book.title}</td><td>${book.publishedDate}</td></tr>`;
        } else {
            table += `<tr><td>${book.title}</td><td>${book.publishedDate}</td></tr>`;
        }
    }
    table += `</table>`;
    booksContainer.innerHTML = table;
});

button4.addEventListener("click", function () {
    const booksContainer = document.querySelector(".books");
    let table = `Name of the authors and number of books they have written. <br>
        <table>
        <tr>
            <th>Author</th>
            <th>Books written</th>
        </tr>`;

    // Crear un objeto para almacenar el número de libros por autor
    const authorCounts = {};
    for (let book of myBooks) {
        if (authorCounts[book.author]) {
            authorCounts[book.author]++;
        } else {
            authorCounts[book.author] = 1;
        }
    }

    // Crear filas de tabla para cada autor
    for (let author in authorCounts) {
        table += `<tr><td>${author}</td><td>${authorCounts[author]}</td></tr>`;
    }

    table += `</table>`;
    booksContainer.innerHTML = table;
});



