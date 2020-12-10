const db = require('../db-config')

module.exports = {
    getRecipes() {
        return db('recipes')
    },
    getShoppingList(recipes_id){
        if(!recipe_id){
            return Promise.resolve(null)
        }
        else{
            return db('recipes_ingredients').where({ recipes_id }).first()
        }
    },
    getInstructions(recipes_id){
        if(recipes_id){
            return db('steps').where({ recipes_id }).first()
        }
        else{
            return Promise.resolve(null)
        }
    }
}