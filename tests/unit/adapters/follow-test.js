import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | follow', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let adapter = this.owner.lookup('adapter:follow');
    assert.ok(adapter);
  });
});
