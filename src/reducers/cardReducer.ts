const initialState = {
  cards: [
    { id: 1, name: 'Леонардо' },
    { id: 2, name: 'Донателло' },
    { id: 3, name: 'Миккеланджело' },
    { id: 4, name: 'Рафаэль' },
  ],
};

const cardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'CARD_LOADED': {
      return {
        cards: action.payload,
      };
    }

    default:
      return state;
  }
};

export default cardReducer;
