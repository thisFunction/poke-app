import DS from 'ember-data';

export default DS.Model.extend({
    count: DS.attr('number'),
    results: DS.attr(),
    next: DS.attr('string'),
    previous: DS.attr('string')
});
