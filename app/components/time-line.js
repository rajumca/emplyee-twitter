import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    store:service('store'),
    tweets:[],
    tweet:null,
    tempTweet:null,
    user:{},
    isTweetEmpty:Ember.computed('tweet',function(){
        return this.get('tweet')==null||this.get('tweet')=='';
    }),
    noTweets:Ember.computed('tempTweet','tweets',function(){
        return (this.get('tempTweet')==null||this.get('tempTweet')=='')&&(this.get('tweets').length==0)
    }),
    actions:{
        tweet:function(){
            let tweet=this.get('tweet');
            if(tweet!=null&&tweet!=''){
               
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
           
        }
        }
    }
});
