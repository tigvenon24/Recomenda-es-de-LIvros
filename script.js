const books = [
    {
        title: "Dom Casmurro",
        author: "Machado de Assis",
        genre: "Ficção",
        description: "Um dos maiores clássicos da literatura brasileira.",
        image: "https://www.livrariapolobooks.com.br/image/cache/catalog/Capa%20-%20Dom%20Casmurro-600x800.jpg"
    },
    {
        title: "O Alquimista",
        author: "Paulo Coelho",
        genre: "Ficção",
        description: "Uma fábula sobre seguir seus sonhos.",
        image: "https://m.media-amazon.com/images/I/81slUinjTlS._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Ficção Científica",
        description: "Uma distopia sobre um futuro totalitário.",
        image: "https://m.media-amazon.com/images/I/61t0bwt1s3L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title: "A Revolução dos Bichos",
        author: "George Orwell",
        genre: "Ficção",
        description: "Uma alegoria sobre a Revolução Russa.",
        image: "https://m.media-amazon.com/images/I/61yb1HHAIVL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        title: "O Pequeno Príncipe",
        author: "Antoine de Saint-Exupéry",
        genre: "Ficção",
        description: "Uma história sobre a inocência e a amizade.",
        image: "https://m.media-amazon.com/images/I/81TmOZIXvzL._AC_UF1000,1000_QL80_.jpg"
    },
];

function displayBooks(booksToDisplay) {
    const booksDiv = document.getElementById('books');
    booksDiv.innerHTML = '';
    booksToDisplay.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        bookDiv.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <div>
                <h3>${book.title}</h3>
                <p><strong>Autor:</strong> ${book.author}</p>
                <p><strong>Gênero:</strong> ${book.genre}</p>
                <p>${book.description}</p>
            </div>
        `;
        booksDiv.appendChild(bookDiv);
    });
}

function searchBooks() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) || 
        book.author.toLowerCase().includes(searchTerm)
    );
    displayBooks(filteredBooks);
}

// Função para adicionar um novo livro
function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;

    if (title && author && genre && description && image) {
        const newBook = { title, author, genre, description, image };
        books.push(newBook);
        displayBooks(books);
        clearInputFields();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Função para limpar os campos de entrada
function clearInputFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('genre').value = '';
    document.getElementById('description').value = '';
    document.getElementById('image').value = '';
}

// Exibir todos os livros inicialmente
displayBooks(books);