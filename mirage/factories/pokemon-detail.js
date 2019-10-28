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
            back_default: "https://via.placeholder.com/100",
            back_shiny: "https://via.placeholder.com/100",
            front_default: "https://via.placeholder.com/100",
            front_shiny: "https://via.placeholder.com/100",
        }
     },
});
