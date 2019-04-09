import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        return this.store.findRecord('pokemon-detail', params.pokemon_id);
      }
});
