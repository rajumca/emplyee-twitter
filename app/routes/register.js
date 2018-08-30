import Route from '@ember/routing/route';

export default Route.extend({

    actions:{
        submit(user){
            let record= this.store.createRecord('user',{
                userName: user.userName,
                name: user.name,
                dateOfBirth: user.dateOfBirth,
                city: user.city,
                state: user.state
            });

            let self = this;

            function transitionToPost(user) {
                 self.transitionTo('feed', user.userName);
            }
            function failure(reason) {
                self.transitionTo('feed', user.userName);
              }
              
            record.save().then(transitionToPost).catch(failure);
           // this.transition('feed', user.userName);
           
        }
    }

});
