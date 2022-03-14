const Book = require("../models/Book");

//Index
exports.index = async (req, res) => {
  const data = await Book.getAllBooks();
  if (data.length == 0) {
    return res.status(300).send("NO books yet)");
  }
  // res.render("home", {posts:data})
  res.send(data);
};

//Show
exports.show = async (req, res) => {
  const { id } = req.params;
  const data = await Book.query().findById(id);

  if (!data) {
    return res.status(300).send("No such a book)");
  }
  res.send(data);
};

//Create
exports.create = async (req, res) => {
  const { name,author,description,image,created_by,genreId,is_bestseller } = req.body;
  if (!name || !author || !description || !image || !created_by) {
    return res.status(400).send("Please, provide all the info)");
  }
  try {
    const data = await Book.query().insert({
      name,
      author,
      description,
      image,
      created_by: parseInt(created_by),
      genreId: parseInt(genreId),
      is_bestseller: parseInt(is_bestseller)
    });
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
};
