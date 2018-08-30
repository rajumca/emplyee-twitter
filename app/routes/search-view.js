import Route from '@ember/routing/route';
import RSVP from 'rsvp';
export default Route.extend({
    ajax: Ember.inject.service(),
    model(params){
        let searchInput=params.searchInput;
        let userName=params.userName;
        return RSVP.hash({
            users:this.store.query('user', {userName: searchInput}),
            user: this.store.findRecord('user', userName) ,
            searchInput:  searchInput     
          });
    }

});
