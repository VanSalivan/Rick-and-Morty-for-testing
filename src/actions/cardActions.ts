// Externals
import { fetchCardsStart, fetchCardsSuccess, fetchCardsFailure } from "../actionCreators"
import { searchCharacters } from "../services/getData"

export const fetchCharacters = (term:string) => async (dispatch: (arg0: { type: string; payload?: any; err?: boolean }) => void) => {
  dispatch(fetchCardsStart())

  try {
    const cards = await searchCharacters(term)

    dispatch(fetchCardsSuccess(cards))
  } catch (err) {
    dispatch(fetchCardsFailure(err))
  }
}