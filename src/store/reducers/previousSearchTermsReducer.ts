import { SEARCH_TERMS_GET_ACTION_TYPE, SEARCH_TERMS_SET_ACTION_TYPE } from "../actions/actionTypes";

interface IPreviousSearchTermsList {
  previousSearchTerms: string[] | null;
}

const savedSearchTerms: string | null = localStorage.getItem("searchTerms") 
const defaultReducerState: IPreviousSearchTermsList = {
    previousSearchTerms: savedSearchTerms ? JSON.parse(savedSearchTerms) : null
};

export const PreviousSearchTermsReducer = (
  state: IPreviousSearchTermsList = defaultReducerState,
  action: any
): IPreviousSearchTermsList => {
  switch (action.type) {
    case SEARCH_TERMS_GET_ACTION_TYPE:
      return {
        ...state
      };
    case SEARCH_TERMS_SET_ACTION_TYPE:
      return {
        ...state,
        previousSearchTerms: action.payload,
      };
    default:
      return state;
  }
};
