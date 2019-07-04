import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | extract-id-from-url', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders correct id from poke api url', async function(assert) {
    this.set('inputValue', 'https://pokeapi.co/api/v2/pokemon/24');
    await render(hbs`{{extract-id-from-url inputValue}}`);
    assert.equal(this.element.textContent.trim(), '24');
  });
});
