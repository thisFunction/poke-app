import DS from 'ember-data';

export default DS.Model.extend({
    count: DS.attr(),
    results: DS.attr()
});
