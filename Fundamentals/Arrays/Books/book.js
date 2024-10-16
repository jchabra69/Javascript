class Book {

    constructor(title, genre, author, pages, publishedDate, read, website) {

        this._title = title;
        this._genre = genre;
        this._author = author;
        this._pages = pages;
        this._publishedDate = publishedDate;
        this._read = read;
        this._website = website;

    }

    //JavaScript automatically invokes the .toString

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get genre() {
        return this._genre;
    }

    set genre(value) {
        this._genre = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        this._author = value;
    }

    get pages() {
        return this._pages;
    }

    set pages(value) {
        this._pages = value;
    }

    get publishedDate() {
        return this._publishedDate;
    }

    set publishedDate(value) {
        this._publishedDate = value;
    }

    get read() {
        return this._read;
    }

    set read(value) {
        this._read = value;
    }

    get website() {
        return this._website;
    }

    set website(value) {
        this._website = value;
    }
}