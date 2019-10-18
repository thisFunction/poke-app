import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

const pokemonPerPage = 20
const randomEnding = faker.random.arrayElement(["mon","chu","saur", "lett", "ite", "lax"]);

export default Factory.extend({
    count(i) {
        return (i + 1) * pokemonPerPage;
    },

    results(i) {
        let pokemonCreated = 1;
        let pokemonResults = [];

        while(pokemonCreated <= pokemonPerPage) {
            const pokemonId = (i * 10) + pokemonCreated;

            let pokemonObject = {
                name:  `${faker.random.word()}${randomEnding}`,
                url: `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
            }
            pokemonResults.push(pokemonObject);
            pokemonCreated += 1;
        }
        return pokemonResults;
    },

    afterCreate(post, server) {
        server.db.pokemons.update({count: post.count})
    }
});