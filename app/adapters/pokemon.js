import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'https://pokeapi.co',
    namespace: 'api/v2',
    pathForType(modelName) {
        return modelName;
    }
});
