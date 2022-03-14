require("dotenv").config();

module.exports = {
	development: {
		client: "mysql",
		connection: {
			database: "handlebars",
			user: "root",
			password: "root",
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
			directory: "./database/migrations",
		},
		seeds: {
			directory: "./database/seeds",
		},
	},
	production: {},
}
