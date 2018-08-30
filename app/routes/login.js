import Route from '@ember/routing/route';

export default Route.extend({
action:{
    error(error, transition) {
        if (error.status != '200') {
            his.get('controller').set('error', true)
          this.replaceWith('login');
        } else {
          return true;
        }
    }
}
});
