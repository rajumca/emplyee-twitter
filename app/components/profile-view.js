import Component from '@ember/component';
import { inject as service } from '@ember/service';
export default Component.extend({
    store:service('store'),
    user: null,
    action: null,
   // followees: [],
    didReceiveAttrs() {
        this._super(...arguments);
       /* let followees=this.get('followees');
        this.get('user').followees.toArray().forEach(function(followee){
            followees.push(followee.userName);
        });*/
       // this.set('followees',this.get('followees').toArray().uniq());
    },actions:{
        follow(followee){
             
            let record= this.store.createRecord('follow',{
                follower: this.get('user').userName,
                followee: followee.userName,
                followed:true
            });
            record.save();
          
           // this.get('followees').push(followee);
            this.get('user').followees[ this.get('user').followees.length]='{userName: "'+followee.userName+'", name: "'+followee.name +'"}'
           // this.set('followees',this.get('followees').toArray().uniq());
        
        }, unfollow(followee){          
            let record= this.store.createRecord('follow',{
                follower: this.get('user').userName,
                followee: followee.userName,
                followed:false
            });
           
            record.save();
         // this.set('followees',this.get('followees').without(followee));
          let user=this.get('user');
          let toUnfollow=null;
          user.followees.forEach(function(unfollowed){
                if(unfollowed.userName==followee.userName){
                    toUnfollow=unfollowed;
                }
          });
          this.get('user').set('followees',this.get('user').followees.toArray().without(toUnfollow));
          //this.set('followees',this.get('followees').toArray().uniq());

        }
    }

});
