import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | pokemon', function(hooks) {
  setupTest(hooks);

  test('it returns correct host value', function(assert) {
    let adapter = this.owner.lookup('adapter:pokemon');
    assert.equal(adapter.host, 'https://pokeapi.co');
  });

  test('it returns correct namespace value', function(assert) {
    let adapter = this.owner.lookup('adapter:pokemon');
    assert.equal(adapter.namespace, 'api/v2');
  });

  test('it returns correct pathForType value', function(assert) {
    let adapter = this.owner.lookup('adapter:pokemon');
    assert.equal(adapter.pathForType('pokemon'), 'pokemon');
  });
});
