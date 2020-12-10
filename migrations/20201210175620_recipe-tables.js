
exports.up = function(knex) {
  return knex.schema.createTable('recipes', table => {
      table.increments('recipes_id')
      table.string('recipes_name', 128).notNullable()
  })
  .createTable('ingredients', table => {
      table.increments('ingredients_id')
      table.string('ingredients_name', 128).notNullable()
  })
  .createTable('steps', table => {
      table.increments('steps_id')
      table.string('instructions', 128).notNullable()
      table.integer('recipes_id')
        .unsigned()
        .notNullable()
        .references('recipes_id').inTable('recipes')
        .onDelete('RESTRICT').onUpdate('RESTRICT')
  })
  .createTable('recipes_ingredients', table => {
      table.increments('recipes_ingredients_id')
      table.integer('ingredients_QTY').notNullable()
      table.integer('ingredients_id')
        .unsigned()
        .notNullable()
        .references('ingredients_id').inTable('ingredients')
        .onDelete('RESTRICT').onUpdate('RESTRICT')
      table.integer('recipes_id')
        .unsigned()
        .notNullable()
        .references('recipes_id').inTable('recipes')
        .onDelete('RESTRICT').onUpdate('RESTRICT')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
