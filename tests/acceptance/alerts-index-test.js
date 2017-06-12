import { test } from 'qunit';
import moduleForAcceptance from 'assemble/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';
import { authenticateSession } from 'assemble/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | alerts index');

test('should get a list of alerts organized by team', function(assert) {
  authenticateSession(this.application);

  visit('/alerts');

  andThen(function() {
    assert.equal(currentURL(), '/alerts');
    assert.equal(find(testSelector('team-id', '1')).text(), 'Team The First');
    assert.equal(find(testSelector('alert-id', '1')).text(), "There's an alert going on");
  });
});
