import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | pokemon', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.controller = this.owner.lookup('controller:pokemon');
  });

  test('initial offset is 0', function(assert) {
    assert.equal(this.controller.offset, 0);
  });

  test('itemsPerPage is 20', function(assert) {
    assert.equal(this.controller.itemsPerPage, 20);
  });
});