import Route from '@ember/routing/route';

export default Route.extend({
    bforeModel(){
        this.store.unloadAll();
    },
    model(params){
        let userName=params.userName;
       // this.store.unloadAll();
        let data= this.store.queryRecord('feed', { follower: userName });
        return data;
    },refreshRoute:function(){
        this.refresh();
    }
    , actions:{
        tweet:function(){
            let tweet=this.get('controller').get('tweet');
            let userPosted=this.get('controller').get('model').get('user');
           let record= this.store.createRecord('tweet',{
                message: tweet,
                user: userPosted,
                time: new Date()
            });
            record.save().then(this.refreshRoute);
          
            this.get('controller').get('model').get('tweets').push(record);
            this.get('controller').set('tweet',"");
            this.transitionTo('feed',userPosted.userName);
           
           
        },
        search:function(searchInput){
            let userName=  this.get('controller').get('model').get('user').userName;
            this.controller.set('searchInput', "");
           this.transitionTo('search-view',userName, searchInput);
        }


    }
});
