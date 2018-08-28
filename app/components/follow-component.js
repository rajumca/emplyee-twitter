import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    store:service('store'),
    followedUser:null,
    follows: false,
    loggedInUserName:null,
    actions:{
        follow(followee){
            let userName=  this.get('loggedInUserName');
            let record= this.store.createRecord('follow',{
                follower: userName,
                followee: followee,
                followed:true
            });
            record.save();
            this.set('follows',true);
            followee.set("follows",true);
        /* this.get('controller').get('model').user.followees.push(followee);
            this.transitionTo('playlist', this.get('controller').get('model'));*/
        
        }, unfollow(followee){
            let userName=  this.get('loggedInUserName');
            let record= this.store.createRecord('follow',{
                follower: userName,
                followee: followee,
                followed:false
            });
            record.save();
            this.set('follows',false);
            followee.set("follows",false);
        
        /*  this.get('controller').get('model').user.followees.removeObject(followee);
            this.transitionTo('playlist', this.get('controller').get('model'));*/
        

        }
    }
});
