import Route from '@ember/routing/route';
import RSVP from 'rsvp';
export default Route.extend({
    model(params){
        let searchInput=params.searchInput;
        let userName=params.userName;
        return RSVP.hash({
            users:this.store.query('user', {userName: searchInput}),
            user: this.store.findRecord('user', userName)
          });
    },
    actions:{
        search(searchInput){
            let userName=  this.get('controller').get('model').user.userName;
            this.controller.set('searchInput', "");
           this.transitionTo('search-view',userName, searchInput);

        }

    }


});
