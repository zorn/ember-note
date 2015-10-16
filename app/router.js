import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('register', {});
  this.route('login', {});
  this.route('notebooks', { path: "notesbooks/:user_id"}, function() {
    this.route('notes', { path: "notes/:notebook_id" }, function() {});
  });
});

export default Router;
