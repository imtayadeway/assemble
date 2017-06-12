import Ember from 'ember';

const { inject, computed } = Ember;
const { service } = inject;
const { alias } = computed;

export default Ember.Controller.extend({
  session: service('session'),
  teams: alias('session.currentUser.teams')
});
