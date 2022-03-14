const { Model } = require("objection");
const knex = require("../utils/db");

Model.knex(knex);

class User extends Model {
  static get tableName() {
    return "users";
  }

  static async getAllUsers() {
    return await this.query();
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name"],

      properties: {
        username: { type: "string", minLength: 1, maxLength: 255 },
        pwd: { type: "string", minLength: 1, maxLength: 255 },
        role: { type: "string", minLength: 1, maxLength: 255 },
        staus: { type: "integer", minLength: 1, maxLength: 1 },
        },
    };
  }
}

module.exports = User;