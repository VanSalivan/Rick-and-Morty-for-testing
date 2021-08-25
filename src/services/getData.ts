export const searchCharacters = async (term: string, pageNumber: number = 1) => {

  const url = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${term}`;
  const characters = await fetch(url);
  if (!characters.ok) {
    console.log(`ошибка запроса, статус код: ${characters.status}`)
    throw new Error(`Fetch не сработал : ${characters.status}`)
   
  }
  const body = await characters.json()
  console.log(body)
  return body
};