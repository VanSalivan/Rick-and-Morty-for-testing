// Externals
import { fetchCardsStart, fetchCardsSuccess, fetchCardsFailure } from "../actionCreators"
import { getAllCharters } from "../services/getData"

export const fetchCharacters = () => async (dispatch: (arg0: { type: string; payload?: any; err?: boolean }) => void) => {
  dispatch(fetchCardsStart())

  try {
    const cards = await getAllCharters()

    setTimeout(() => dispatch(fetchCardsSuccess(cards)), 5000)
  } catch (err) {
    dispatch(fetchCardsFailure(err))
  }
}