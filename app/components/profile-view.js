import Component from '@ember/component';
import { inject as service } from '@ember/service';
export default Component.extend({
    store:service('store'),
    user: null,
    action: null,
   // followees: [],
    didReceiveAttrs() {
        this._super(...arguments);
    },actions:{
        follow(followee){
             
            let record= this.store.createRecord('follow',{
                follower: this.get('user').userName,
                followee: followee.userName,
                followed:true
            });
            record.save();
          
            this.get('user').followees[ this.get('user').followees.length]='{userName: "'+followee.userName+'", name: "'+followee.name +'"}'
        
        }, unfollow(followee){          
            let record= this.store.createRecord('follow',{
                follower: this.get('user').userName,
                followee: followee.userName,
                followed:false
            });
           
            record.save();
         
          let user=this.get('user');
          let toUnfollow=null;
          user.followees.forEach(function(unfollowed){
                if(unfollowed.userName==followee.userName){
                    toUnfollow=unfollowed;
                }
          });
          this.get('user').set('followees',this.get('user').followees.toArray().without(toUnfollow));
        }
    }

});
