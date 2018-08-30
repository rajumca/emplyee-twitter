import Route from '@ember/routing/route';
import RSVP from 'rsvp';
export default Route.extend({
    model(params){
        let userName=params.userName;
        Ember.run(() => this.store.unloadAll());
        return RSVP.hash({
            user: this.store.findRecord('user', userName),
            feed:this.store.queryRecord('feed', { userName: userName, userTweetsOnly:true }),
            action: params.action
          });
    },
actions:{
        follow(followee){
            //let userName=  this.get('controller').get('model').user.userName;
            var user=this.get('controller').get('model').user;
            var model=this.get('controller').get('model');
            var thisStore=this.store;
            let record= this.store.createRecord('follow',{
                follower: user.userName,
                followee: followee,
                followed:true
            });
            let self = this;

            function transitionToPost(record) {
                 self.transitionTo('profile-view', user.userName);
            }
            function failure(reason) {
                self.transitionTo('profile-view', user.userName);
            }
              
            record.save().then(transitionToPost).catch(failure);
        
        }, unfollow(followee){
            var user=this.get('controller').get('model').user;
            var user=this.get('controller').get('model').user;
            var model=this.get('controller').get('model');
            var thisStore=this.store;
            let record= this.store.createRecord('follow',{
                follower: user.userName,
                followee: followee,
                followed:false
            });
           
            let self = this;
            function transitionToPost(record) {
                self.transitionTo('profile-view', record.follower);
           }
           function failure(reason) {
               self.transitionTo('profile-view', user.userName);
             }
             
           record.save().then(transitionToPost).catch(failure);
        }
    }
});
