import Route from '@ember/routing/route';
import RSVP from 'rsvp';
export default Route.extend({
    model(params){
        let userName=params.userName;
        return RSVP.hash({
            users:'',
            user: this.store.findRecord('user', userName),
            action: params.action
          });
    }
});
