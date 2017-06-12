import BaseSerializer from './application';
import { Collection } from 'ember-cli-mirage';

export default BaseSerializer.extend({
  include: ['teams'],

  teams(alert) {
    let teams = alert.alertTeams.map(at => at.team);
    return new Collection('team', teams);
  }
});
