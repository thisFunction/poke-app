import DS from 'ember-data';

export default DS.RESTSerializer.extend({  
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        if (id === null) {
            const payloadId = Date.now();
            payload = {
                pokemon: {
                    id: payloadId,
                    results: payload.results,
                    count: payload.count,
                    next: payload.next,
                    previous: payload.previous,
                }
            }
        }
        else {
            debugger
            payload = {
                "pokemonDetail": {
                    id: payload.id,
                    name: payload.name,
                    height: payload.height,
                    next: payload.next,
                    sprites: payload.sprites,
                }
            }  
        }
        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});