import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        let userName=params.userName;
        let data= this.store.queryRecord('feed', { follower: userName })
        return data;
    }, actions:{
        tweet:function(){
            let tweet=this.get('controller').get('tweet');
            let userPosted=this.get('controller').get('model').get('user');
           let record= this.store.createRecord('tweet',{
                message: tweet,
                user: userPosted,
                time: new Date()
            });
            record.save().then(function(){
               // this.controller.set('model',this.store.queryRecord('feed', { follower: userPosted.userName }));
           // alert('hello')
           this.refresh();
            });
            this.get('controller').set('tweet',"");
           
           
        },
        search:function(searchInput){
            let userName=  this.get('controller').get('model').get('user').userName;
            this.controller.set('searchInput', "");
           this.transitionTo('search-view',userName, searchInput);
        }


    }
});
