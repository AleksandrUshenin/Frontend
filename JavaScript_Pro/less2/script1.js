class Library {
    #books = [{}]
    get allBooks() {
        return this.#books;
    }
    #findObj(title) {
        var res = false;
        this.#books.forEach(obj => {
            if (obj.name === title.name) {
                res = true;
            }
        });
        return res;
    }
    addBook(title) {
        if (title != null) {
            if (this.#findObj(title)) {
                throw new Error('the title has already been added');
            }
            this.#books.push(title);
        }
        else {
            throw new Error('titel is null')
        }
    }
    removeBook(title) {
        if (title != null) {
            if (!this.#findObj(title)) {
                throw new Error('title not found');
            }
            else {
                for (let i = 0; i < this.#books.length; i++) {
                    if (this.#books[i].name == title.name) {
                        this.#books.splice(i, 1);
                    }
                }
            }
        }
    }
    hasBook(title){
        return this.#findObj(title);
    }
    constructor(books) {
        this.#books = books;
    }
}
const lib = new Library([{ name: 'book1', author: 'author1' }, { name: 'book2', author: 'author2' }]);
console.log(lib.allBooks);
lib.addBook({ name: 'book3', author: 'author3' });
const rem = { name: 'book1', author: 'author1' };
lib.removeBook(rem);
console.log(lib.hasBook({ name: 'book3', author: 'author3' }));