import Route from '@ember/routing/route';
import RSVP from 'rsvp';
export default Route.extend({
    model(params){
        let userName=params.userName;
        return RSVP.hash({
            user: this.store.findRecord('user', userName),
            feed:this.store.queryRecord('feed', { userName: userName, userTweetsOnly:true }),
            action: params.action
          });
    },
actions:{
        follow(followee){
            let userName=  this.get('controller').get('model').user.userName;
            let record= this.store.createRecord('follow',{
                follower: userName,
                followee: followee,
                followed:true
            });
            record.save();
        /* this.get('controller').get('model').user.followees.push(followee);
            this.transitionTo('playlist', this.get('controller').get('model'));*/
        
        }, unfollow(followee){
            let userName=  this.get('controller').get('model').user.userName;
            let record= this.store.createRecord('follow',{
                follower: userName,
                followee: followee,
                followed:false
            });
            record.save();
        /*  this.get('controller').get('model').user.followees.removeObject(followee);
            this.transitionTo('playlist', this.get('controller').get('model'));*/
        

        }
    }
});
