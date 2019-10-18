import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | navigation-component', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.offset = 0;
    this.count= 60;
    this.itemsPerPage = 20;
    this.previousPage = () => {};
    this.nextPage = () => {};
  });

  module('previous button', function() {
    test('it renders previous button disabled when offset is 0', async function(assert) {
      await render(hbs`{{
        navigation-component 
        offset=offset 
        count=count 
        itemsPerPage=itemsPerPage 
        previousPage=previousPage
        nextPage=nextPage
      }}`);
  
      assert.ok(this.element.querySelectorAll('button')[0].disabled);
    });
  
    test('it renders previous button enabled when offset is greater than 0', async function(assert) {
      this.offset = 40;

      await render(hbs`{{
        navigation-component 
        offset=offset 
        count=count 
        itemsPerPage=itemsPerPage 
        previousPage=previousPage
        nextPage=nextPage
      }}`);

      assert.notOk(this.element.querySelectorAll('button')[0].disabled);
    });
  });

  module('next button', function() {
    test('it renders next button disabled when offset and itemsPerPage are equal to totalItemCount', async function(assert) {
      this.offset = 40;
  
      await render(hbs`{{
        navigation-component 
        offset=offset 
        count=count 
        itemsPerPage=itemsPerPage 
        previousPage=previousPage
        nextPage=nextPage
      }}`);
  
      assert.ok(this.element.querySelectorAll('button')[1].disabled);
    });

    test('it renders next button enabled when offset and itemsPerPage are less than totalItemCount', async function(assert) {
      this.offset = 50;
  
      await render(hbs`{{
        navigation-component 
        offset=offset 
        count=count 
        itemsPerPage=itemsPerPage 
        previousPage=previousPage
        nextPage=nextPage
      }}`);
  
      assert.ok(this.element.querySelectorAll('button')[1].disabled);
    });
  });
});