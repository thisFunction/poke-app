import Route from '@ember/routing/route';

export default Route.extend({
    queryParams: { offset: { refreshModel: true }},
  
    model(params) {
      const offset = params.offset ? params.offset : 0;
      
      return this.store.queryRecord('pokemon', {
        offset
      });
    }
});