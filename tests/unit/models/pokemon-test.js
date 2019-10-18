import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Unit | Model | pokemon detail', function(hooks) {
  setupTest(hooks);
  setupMirage(hooks);

  test('it returns correct model values from backend', async function(assert) {
    server.create('pokemon-detail', { id: 1 });
    const database = server.db.pokemonDetails.find(1)
    const store = this.owner.lookup('service:store');
    const model = await store.findRecord('pokemon', 1);

    assert.deepEqual(model.results, database.results);
  });
});