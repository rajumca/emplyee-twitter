import Route from '@ember/routing/route';

export default Route.extend({
    bforeModel(){
        this.store.unloadAll();
    },
    model(params){
        let userName=params.userName;
       // this.store.unloadAll();
        let data=  this.store.queryRecord('feed', { userName: userName, userTweetsOnly:false })
        return data;
    } , actions:{
        search:function(searchInput){
            let userName=  this.get('controller').get('model').get('user').userName;
            this.controller.set('searchInput', "");
           this.transitionTo('search-view',userName, searchInput);
        }


    }
});
