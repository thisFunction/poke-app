import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

const randomEnding = faker.random.arrayElement(["mon","chu","saur", "lett", "ite", "lax"]);

export default Factory.extend({
    name() {  
        return `${faker.random.word()}${randomEnding}`;
    },
    
    height() {
        return faker.random.number();
    },

    weight() {
        return faker.random.number();
    },

    sprites() {
        return {
            back_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png",
            back_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/9.png",
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
            front_shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png",
        }
     },
});