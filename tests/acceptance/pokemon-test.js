import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | pokemon', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function() {
    server.createList('pokemon', 3)
    server.create('pokemon-detail', 1)
  });

  test('correct url is present on visiting /pokemon', async function(assert) {
    await visit('/pokemon');

    assert.equal(currentURL(), '/pokemon');
  });

  test('correct total pokemon text is visible on visiting /pokemon', async function(assert) {
    await visit('/pokemon');

    assert.ok(this.element.querySelector('p').innerText.includes('60'));  
  });

  test('an initial list of 20 pokemon renders on visiting /pokemon', async function(assert) {
    await visit('/pokemon');

    assert.equal(this.element.querySelectorAll('ul li').length, 20);
  });

  test('correct navigation button states are present on /pokemon', async function(assert) {
    await visit('/pokemon');

    assert.equal(this.element.querySelectorAll('button').length, 2, 'renders next and previous button');
    assert.ok(this.element.querySelectorAll('button')[0].disabled, 'previous button is disabled');
    assert.notOk(this.element.querySelectorAll('button')[1].disabled, 'next button is not disabled');
  });

  test('clicking next button on /pokemon takes user to correct offset', async function(assert) {
    await visit('/pokemon');
    await click(this.element.querySelectorAll('button')[1]);

    assert.equal(currentURL(), '/pokemon?offset=20');
  });

  test('clicking previous button /pokemon?offset=40 takes user to correct offset', async function(assert) {
    await visit('/pokemon?offset=40');
    await click(this.element.querySelectorAll('button')[0]);

    assert.equal(currentURL(), '/pokemon?offset=20');
  });

  test('next button is disabled on /pokemon?offset=40', async function(assert) {
    await visit('/pokemon?offset=40');

    assert.ok(this.element.querySelectorAll('button')[1].disabled);
  });
});
