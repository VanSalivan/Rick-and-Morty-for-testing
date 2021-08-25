// Externals
import { fetchCardsStart, fetchCardsSuccess, fetchCardsFailure, fetchPagesSuccess } from "../actionCreators";
import { searchCharacters } from "../services/getData";
import { ICharacter } from "../types/character";

interface ICards {
  info: {
    pages: number
  },
  results:ICharacter[]
}

export const fetchCharacters = (term:string) => async (dispatch: (arg0: { type: string; payload?: any; err?: boolean }) => void) => {
  dispatch(fetchCardsStart())

  try {
    const cards:ICards = await searchCharacters(term)

    dispatch(fetchCardsSuccess(cards.results))
    dispatch(fetchPagesSuccess(cards.info.pages))
  } catch (err) {
    dispatch(fetchCardsFailure(err))
  }
}