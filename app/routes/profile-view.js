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
            record.save();
           // record.save().then(model.set('user',thisStore.findRecord('user', user.userName)))
            this.transitionTo('#')
            window.location.reload(true);
        /* this.get('controller').get('model').user.followees.push(followee);
            this.transitionTo('playlist', this.get('controller').get('model'));*/
        
        }, unfollow(followee){
            var user=this.get('controller').get('model').user;
            //let userName=  this.get('controller').get('model').user.userName;
            var user=this.get('controller').get('model').user;
            var model=this.get('controller').get('model');
            var thisStore=this.store;
            let record= this.store.createRecord('follow',{
                follower: user.userName,
                followee: followee,
                followed:false
            });
            record.save();
          //  record.save().then(model.set('user',thisStore.findRecord('user', user.userName)))
            this.transitionTo('#')
            window.location.reload(true);
        /*  this.get('controller').get('model').user.followees.removeObject(followee);
            this.transitionTo('playlist', this.get('controller').get('model'));*/
        

        }
    }
});
