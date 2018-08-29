import DS from 'ember-data';

export default DS.RESTAdapter.extend({

    host: "http://localhost:8080",

    ajaxOptions(url,type,options){
        let newOptions=this._super(url,type,options);
        newOptions.xhrFields = {withCredentials: true},
        newOptions.crossDomain = true
        return newOptions;
    },
    shouldReloadAll:function(store, snapshotArray) {
        return true; 
        },
        shouldReloadRecord(store, ticketSnapshot) {
        return true;
        }

});
