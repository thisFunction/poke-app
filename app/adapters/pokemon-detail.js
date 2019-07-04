import Pokemon from './pokemon';

export default Pokemon.extend({
    buildURL (_modelName, id) {
        return `${this.host}/${this.namespace}/pokemon/${id}`;
    },
});
