import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('pokemon', function() {
    this.route('pokemon-details', { path: '/:pokemon_id' });
  });
});

export default Router;
