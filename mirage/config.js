export default function() {

  this.urlPrefix = 'https://pokeapi.co';
  this.namespace = 'api/v2';
  this.timing = 400;

  this.get('/pokemon', (schema, request) => {
    const offset = Number(request.queryParams.offset);

    return schema.db.pokemons[offset/20];
  });

  this.get('/pokemon/:id', (schema, { params }) => {
    return schema.db.pokemonDetails.find(params.id);
  });
}