
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {steps_id: 1, instructions: 'Prepare a Bowl and a spoon', recipes_id: 1},
        {steps_id: 2, instructions: 'Pour Milk into the bowl', recipes_id: 1},
        {steps_id: 3, instructions: 'Pour Frosted Flakes as much as you desire', recipes_id: 1},
        {steps_id: 5, instructions: 'Give it a stir to make Frosted Flakes soaked into milk', recipes_id: 1},
        {steps_id: 6, instructions: 'Preheat Oven to 400F', recipes_id: 2},
        {steps_id: 7, instructions: 'Combine the flour, baking powder', recipes_id: 2},
        {steps_id: 8, instructions: 'Heat the butter in the microwave for a minute ', recipes_id: 2},
        {steps_id: 9, instructions: 'pour egg and vanilla extract and sugar into the bowl of butter', recipes_id: 2},
        {steps_id: 10, instructions: 'Gently pour the batter into the muffin pan and bake for 20 mins', recipes_id: 2},
        {steps_id: 11, instructions: 'Prepare a water and a pot', recipes_id: 3},
        {steps_id: 12, instructions: 'wait until the water is boiling', recipes_id: 3},
        {steps_id: 13, instructions: 'When the water boils, pour the ramen noodle and the broth stock', recipes_id: 3},
        {steps_id: 14, instructions: 'Give 3 mins till noodle is cooked, and it\'s ready to eat!', recipes_id: 3},

      ]);
    });
};
