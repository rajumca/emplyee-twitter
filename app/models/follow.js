import DS from 'ember-data';

export default DS.Model.extend({
follower: DS.attr('string'),
followee: DS.attr('string'),
followed:DS.attr('boolean')
});
