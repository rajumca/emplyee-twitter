import Component from '@ember/component';

export default Component.extend({
    followers:[],
    followersIds:[],
    didReceiveAttrs() {
        this._super(...arguments);
        this.get('followers').each(function(item){
                    followersIds.push('item.userName')
        });
        
      },actions:{
          unfollow(unfollowedUserName){
                this.get('followersIds')
                var index = this.get('followersIds').indexOf(unfollowedUserName);
                if (index > -1) {
                    this.get('followersIds').splice(index, 1);
                }
          }
      }
});
