import {
  REQUEST_CARDS,
  REQUEST_CARDS_SUCCESS,
  REQUEST_CARDS_FAILED,
  REQUEST_PAGE_CARDS,
  REQUEST_PAGE_CARDS_SUCCESS,
  REQUEST_PAGE_CARDS_FAILED
} from '../constant';

const initialState = {
  cards: [],
  isLoadingFetchingCards: false,
  isLoadingPage: false
}

const tcgCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CARDS:
      return {
        ...state,
        isLoadingFetchingCards: true,
        cards: []
      };
    case REQUEST_CARDS_SUCCESS:
      return {
        ...state,
        isLoadingFetchingCards: false,
        cards: action.payload
      };
    case REQUEST_CARDS_FAILED:
      return {
        ...state,
        isLoadingFetchingCards: false
      };
    case REQUEST_PAGE_CARDS:
      return {
        ...state,
        isLoadingPage: true
      };
    case REQUEST_PAGE_CARDS_SUCCESS:
      return {
        ...state,
        isLoadingPage: false,
        cards: [...state.cards, ...action.payload]
      }
    case REQUEST_PAGE_CARDS_FAILED:
      return {
        ...state,
        isLoadingPage: false
      }
    default:
      return { ...state };
  }
}

export { tcgCardReducer };
