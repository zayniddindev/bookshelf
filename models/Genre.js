const { Model } = require("objection");
const knex = require("../utils/db");
Model.knex(knex);

class Genre extends Model {
  static get tableName() {
    return "genres";
  }
  
  static async getAllGenres() {
    return await this.query();
  }
  
  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],

      properties: {
        name: { type: "string", minLength: 1, maxLength: 255 },
        description: { type: "string", minLength: 1, maxLength: 500 },
        created_by: { type: "integer" }      
      },
    };
  }

  static get relationMappings(){
    const User = require('./User');
      return  {
          created_by : {
            reletion: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
                from: "genres.created_by",
                to: "users.id"
            }
          }
      }
  }
}

module.exports = Genre;