const { Model } = require("objection");
const knex = require("../utils/db");
Model.knex(knex);

class Book extends Model {
  static get tableName() {
    return "books";
  }

  static async getAllBooks() {
    return await this.query();
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "author"],

      properties: {
        name: { type: "string", minLength: 1, maxLength: 255 },
        author: { type: "string", minLength: 1, maxLength: 255 },
        description: { type: "string", minLength: 1, maxLength: 500 },
        created_by: { type: "integer" },
        genreId: { type: "integer" },
        is_bestSeller: { type: "integer" }
      },
    };
  }
  
  static get relationMappings() {
    const Genre = require('./Genre');
    return  {
        genre : {
          reletion: Model.BelongsToOneRelation,
          modelClass: Genre,
          join: {
              from: "books.genreId",
              to: "genres.id"
          }
        }
    }
}
}

module.exports = Book;
