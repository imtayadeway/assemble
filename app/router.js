import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users', function() {
    this.route('show', { path: '/:user_id' });
    this.route('edit', { path: '/:user_id/edit' });
  });
  this.route('users/login');
  this.route('teams');
  this.route('login');
  this.route('signup');
  this.route('alerts');
});

export default Router;
