import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('feed', {path:'/:userName'});
  this.route('search-view',{path:'search/:userName/:searchInput'});
});

export default Router;
