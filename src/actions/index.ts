const cardLoaded = (newCards: any) => {
  return {
    type: 'CARD_LOADED',
    payload: newCards,
  };
};

export { cardLoaded };
