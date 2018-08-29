import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    store:service('store'),
    tweets:[],
    tweet:null,
    tempTweet:null,
    user:{},
    actions:{
        tweet:function(){
            let tweet=this.get('tweet');
            let userPosted=this.get('user');
           let record= this.get('store').createRecord('tweet',{
                message: tweet,
                user: userPosted,
                time: new Date()
            });
            record.save();
          
            this.set('tempTweet',{
                message: tweet,
                user: userPosted,
                time: new Date()
            });
            this.set('tweet',"");
            //this.transitionTo('feed',userPosted.userName);
           
           
        }
    }
});
