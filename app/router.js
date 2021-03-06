import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('feed', {path:'user/:userName'});
  this.route('search-view',{path:'search/:userName/:searchInput'});
  this.route('register');
  this.route('login', {path:"/"});
  this.route('profile-view',{path:'profile/:userName/:action'});
});

export default Router;
