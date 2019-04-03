import { helper } from '@ember/component/helper';

export function extractIdFromUrl(params/*, hash*/) {
  const [url] = params;
  let pokemonId = url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','');
  return pokemonId;
}

export default helper(extractIdFromUrl);
