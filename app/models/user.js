import DS from 'ember-data';

export default DS.Model.extend({
    userName:DS.attr('string'),
    name:DS.attr('string'),
    followers:DS.attr(),
    followees:DS.attr(),
    dateOfBirth:DS.attr('date'),
    city:DS.attr('string'),
    state:DS.attr('string')

});
