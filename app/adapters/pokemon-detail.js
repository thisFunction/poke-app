import Pokemon from './pokemon';

export default Pokemon.extend({
    buildURL (modelName, id) {
        return `${this.host}/${this.namespace}/pokemon/${id}`;
    },
});
