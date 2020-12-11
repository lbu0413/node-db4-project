
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredients_id: 1, ingredients_name: 'milk'},
        {ingredients_id: 2, ingredients_name: 'frosted_flakes'},
        {ingredients_id: 3, ingredients_name: 'flour'},
        {ingredients_id: 4, ingredients_name: 'baking_powder'},
        {ingredients_id: 5, ingredients_name: 'sugar'},
        {ingredients_id: 6, ingredients_name: 'egg'},
        {ingredients_id: 7, ingredients_name: 'butter'},
        {ingredients_id: 8, ingredients_name: 'vanilla_extract'},
        {ingredients_id: 9, ingredients_name: 'water'},
        {ingredients_id: 10, ingredients_name: 'ramen noodle'},
      ]);
    });
};
