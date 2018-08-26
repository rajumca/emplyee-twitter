import DS from 'ember-data';

export default DS.Model.extend({
message:DS.attr('string'),
time:DS.attr('date'),
user:DS.attr()
});
