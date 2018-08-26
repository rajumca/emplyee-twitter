import DS from 'ember-data';

export default DS.Model.extend({
    tweets:DS.attr(),
    user:DS.attr()
});
