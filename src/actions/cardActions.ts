// Externals
import { fetchCardsStart, fetchCardsSuccess, fetchCardsFailure, fetchPagesSuccess, fetchCurrentPageSuccess } from "../actionCreators";
import { searchCharacters } from "../services/getData";
import { ICharacter } from "../types/character";

interface ICards {
  info: {
    pages: number
    prev: string | null
  },
  results:ICharacter[]
}

export const fetchCharacters = (term:string, pageNumber: number = 1) => async (dispatch: (arg0: { type: string; payload?: any; err?: boolean }) => void) => {
  dispatch(fetchCardsStart())

  try {
    const cards:ICards = await searchCharacters(term, pageNumber)

    dispatch(fetchCardsSuccess(cards.results))
    dispatch(fetchCurrentPageSuccess(pageNumber))
    dispatch(fetchPagesSuccess(cards.info.pages))
  } catch (err) {
    dispatch(fetchCardsFailure(err))
  }
}