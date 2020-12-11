
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipes_id: 1, recipes_name: 'cereal'},
        {recipes_id: 2, recipes_name: 'muffin'},
        {recipes_id: 3, recipes_name: 'ramen'}
      ]);
    });
};
