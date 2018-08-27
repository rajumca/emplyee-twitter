import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    

    host: "http://localhost:8080",

    ajaxOptions(url,type,options){
        let follower=options.data.follow.follower;
        let followee=options.data.follow.followee;
        let followed=options.data.follow.followed;
        let newUrl=this.get('host')+"/users/"+followee+"/follow?follower="+follower;
        let newMethod='POST';
        if(!followed){
            newMethod='DELETE';
        }
        let newOptions=this._super(newUrl,newMethod,options);
        newOptions.xhrFields = {withCredentials: true},
        newOptions.crossDomain = true
        return newOptions;
    }

});
