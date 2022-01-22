let knex = require("knex");
let database = knex({
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: "qwerty123",
        database: "p7oc",
    }
});

(async () => {
    try {
        await database.schema
            .dropTableIfExists('posts')
            .dropTableIfExists('accounts');
        await database.schema.createTable("accounts", (builder) => {
            builder.increments("id");
            builder.string("email").notNullable()
            builder.string("username").notNullable();
            builder.string("password").notNullable();
            builder.datetime("last_connexion").notNullable().defaultTo(database.fn.now());
        }).createTable("posts", (builder) => {
            builder.increments("id");
            builder.integer("user_id").notNullable().unsigned().references("accounts.id");
            builder.text("content");
            builder.string("image_url");
            builder.datetime("created_at").defaultTo(database.fn.now());
        });
        console.log("Database connection successfuled");
    } catch(e) {
        console.error(e);
    }
})();

module.exports = database;