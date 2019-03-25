import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    height:DS.attr(),
    weight: DS.attr(),
    sprites: DS.attr()
});
