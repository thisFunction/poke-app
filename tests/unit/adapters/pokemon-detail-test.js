import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | pokemon detail', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it returns correct url', function(assert) {
    let adapter = this.owner.lookup('adapter:pokemon-detail');
    assert.equal(adapter.buildURL(null, 4), 'https://pokeapi.co/api/v2/pokemon/4');
  });
});
