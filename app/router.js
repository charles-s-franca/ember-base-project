import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('friends', function() {
    this.route('list', {path: "/"});
    this.route('new', {path: "/new"});
    this.route('edit', {path: "/:id"});
  });
  this.route('users');
});

export default Router;
