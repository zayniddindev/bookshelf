exports.up = function (knex, Promise) {
    return Promise.all([
        knex.schema.createTable("books", (table) => {
            table.integer("id").notNullable();
            table.string("name").notNullable();
            table.string("author").notNullable();
            table.string("image");
            table.integer("price").notNullable();
        }),
    ]).then(console.log("Craeted table USER")).catch(console.log("Error"));
};

exports.down = function (knex, Promise) {
    return Promise.all([
        knex.schema.dropTable("books")
    ])
}
exports.config = { transaction: false };
