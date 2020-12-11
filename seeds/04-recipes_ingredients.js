
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {recipes_id: 1, ingredients_id: 1, ingredients_QTY: 1},
        {recipes_id: 1, ingredients_id: 2, ingredients_QTY: 1},
        {recipes_id: 2, ingredients_id: 1, ingredients_QTY: 1},
        {recipes_id: 2, ingredients_id: 3, ingredients_QTY: 1},
        {recipes_id: 2, ingredients_id: 4, ingredients_QTY: 1},
        {recipes_id: 2, ingredients_id: 5, ingredients_QTY: 1/2},
        {recipes_id: 2, ingredients_id: 6, ingredients_QTY: 4},
        {recipes_id: 2, ingredients_id: 7, ingredients_QTY: 1},
        {recipes_id: 2, ingredients_id: 8, ingredients_QTY: 1/8},
        {recipes_id: 3, ingredients_id: 9, ingredients_QTY: 1},
        {recipes_id: 3, ingredients_id: 10, ingredients_QTY: 1}
      ]);
    });
};
