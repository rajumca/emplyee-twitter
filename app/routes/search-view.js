import Route from '@ember/routing/route';
import RSVP from 'rsvp';
export default Route.extend({
    ajax: Ember.inject.service(),
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

        },
        follow(followee){
            let user=  this.get('controller').get('model').user;
            let userName=  this.get('controller').get('model').user.userName;
           let record= this.store.createRecord('follow',{
                follower: userName,
                followee: followee.userName,
                followed:true
            });
            record.save();
            user.followees[user.followees.length]='{userName: "'+followee.userName+'", name: "'+followee.name +'"}'
           
           /* this.get('controller').get('model').user.followees.push(followee);
            this.transitionTo('playlist', this.get('controller').get('model'));*/
          
        }, unfollow(followee){
            let userName=  this.get('controller').get('model').user.userName;
            let record= this.store.createRecord('follow',{
                follower: userName,
                followee: followee.userName,
                followed:false
            });
            record.save();
            let user=  this.get('controller').get('model').user;
            let toUnfollow=null;
                user.followees.forEach(function(unfollowed){
                if(unfollowed.userName==followee.userName){
                    toUnfollow=unfollowed;
                }
          });
            user.set('followees',user.followees.toArray().without(toUnfollow));
          /*  this.get('controller').get('model').user.followees.removeObject(followee);
            this.transitionTo('playlist', this.get('controller').get('model'));*/
        
    
        }



    }


});
