import DS from 'ember-data';

export default DS.RESTSerializer.extend({  
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
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
        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});