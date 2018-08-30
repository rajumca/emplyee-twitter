import Controller from '@ember/controller';

export default Controller.extend({
    searchInput:null,
    actions:{
        search(searchInput){
            let userName=  this.get('model').user.userName;
            this.set('searchInput', "");
           this.transitionToRoute('search-view',userName, searchInput);

        },
        follow(followee){
            let user=  this.get('model').user;
            let userName=  this.get('model').user.userName;
           let record= this.store.createRecord('follow',{
                follower: userName,
                followee: followee.userName,
                followed:true
            });
            record.save();
            user.followees[user.followees.length]='{userName: "'+followee.userName+'", name: "'+followee.name +'"}'
            this.transitionToRoute('search-view', this.get('model').user.userName, this.get('model').searchInput);
           /* this.get('controller').get('model').user.followees.push(followee);
            this.transitionTo('playlist', this.get('controller').get('model'));*/
          
        }, unfollow(followee){
            let userName=  this.get('model').user.userName;
            let record= this.store.createRecord('follow',{
                follower: userName,
                followee: followee.userName,
                followed:false
            });
            record.save();
            let user=  this.get('model').user;
            let toUnfollow=null;
                user.followees.forEach(function(unfollowed){
                if(unfollowed.userName==followee.userName){
                    toUnfollow=unfollowed;
                }
          });
            user.set('followees',user.followees.toArray().without(toUnfollow));
          /*  this.get('controller').get('model').user.followees.removeObject(followee);
            this.transitionTo('playlist', this.get('controller').get('model'));*/
        
            this.transitionToRoute('search-view', this.get('model').user.userName, this.get('model').searchInput);
        }



    }
 
});
