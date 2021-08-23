export const getAllCharters = () => {
  const characters = fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then(body => body.results)
  
  return characters
};

export const getPageById = (id:number) => {
  fetch(`https://rickandmortyapi.com/api/character/?page=${id}`)
    .then((res) => res.json())
    .then((res) => console.log(res));
};