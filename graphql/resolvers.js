const { authors, books } = require("../models");
const { sequelize } = require("sequelize");
const { where } = require('sequelize');


const Query = {
  getAuthorDetails: async () => {
    try {
      const author = await authors.findAll();
      return author;
    } catch (err) {
      console.log(err);
    }
  },
  getAuthor: async (root, { AuthorID }) => {
    try {
      const auth = await authors.findByPk(AuthorID);
      return auth;
    } catch (err) {
      console.log(err);
    }
  },
  getBookDetails: async () => {
    try {
      const book = await books.findAll();
      return book;
    } catch (err) {
      console.log(err);
    }
  },
  getBook: async (root, { BookID }) => {
    try {
      const singleBook = await books.findByPk(BookID);
      return singleBook;
    } catch (err) {
      console.log(err);
    }
  },
};
const Author = {
  book: (auth) => books.findByPk(auth.BookID),
};

const Book = {
  author: (singleBook) => authors.findByPk(singleBook.AuthorID),
};

const Mutation = {
  createAuthor: async (root, { AuthorID, FirstName, LastName, DOB }) => {
    try {
      (await authors) &&
        authors.create({
          AuthorID,
          FirstName,
          LastName,
          DOB,
        });
      return "Author created.";
    } catch (error) {
      console.error(error);
    }
  },

  updateAuthor: async (_, { AuthorID, FirstName, LastName, DOB }) => {
    try {
      (await authors) &&
        authors.update(
          {
            AuthorID,
            FirstName,
            LastName,
            DOB,
          },
          { where: { AuthorID: AuthorID } }
        );
      return "Author Updated";
    } catch (err) {
      console.error(err);
    }
  },

  deleteAuthor: async (_, { AuthorID }) => {
    await authors.destroy({ where: { AuthorID: AuthorID } });
    return "Author Deleted";
  },

	createBook: async (_ , {
		BookID,
		BookTitle,
		EditionNumber,
		TotalPages,
	}) =>  {
		try {
			await books && books.create({
        BookID,
				BookTitle,
				EditionNumber,
				TotalPages,		
			})																							
			return "Book created."
		}catch(error){
			console.error(error);
		}
	},

	updateBook: async (_ , {
				BookID,
				BookTitle,
				EditionNumber,
				TotalPages,	
	}) => {
		try {
			await books && books.update({
				BookID,
				BookTitle,
				EditionNumber,
				TotalPages,	
			} ,{ where: { BookID: BookID } });
			return "Book Updated";
		}catch (err) {
			console.error(err);
  		}	
	},

	deleteBook: async(_ , { BookID }) => {
		await books.destroy({ where: { BookID: BookID }})
		return "Book Deleted";
	}

};
module.exports = { Query, Author, Book, Mutation };
