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
    const model = await store.findRecord('pokemon-detail', 1);

    assert.equal(model.name, database.name);
    assert.equal(model.height, database.height);
    assert.equal(model.weight, database.weight);
    assert.deepEqual(model.sprites, database.sprites);
  });
});
