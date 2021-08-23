export const searchCharacters = (term: string) => {
  const characters = fetch(`https://rickandmortyapi.com/api/character/?name=${term}`)
  .then((res) => res.json())
  .then(body => body.results)
  
  return characters
};