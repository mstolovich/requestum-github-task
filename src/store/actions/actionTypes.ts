import RepositoryModel from "../models/RepositoryModel";

export const REPOSITORIES_LOADING_ACTION_TYPE = "REPOSITORIES_LOADING";
export const REPOSITORIES_SUCCESS_ACTION_TYPE = "REPOSITORIES_SUCCESS";
export const REPOSITORIES_ERROR_ACTION_TYPE = "REPOSITORIES_ERROR";
export const SEARCH_TERMS_GET_ACTION_TYPE = "SEARCH_TERMS_GET_ACTION_TYPE"
export const SEARCH_TERMS_SET_ACTION_TYPE = "SEARCH_TERMS_SET_ACTION_TYPE"

export type REPOSITORIES_LOADING_ACTION = {
  type: string;
  payload: string;
};

export type REPOSITORIES_SUCCESS_ACTION = {
  type: string;
  payload: {
    items: RepositoryModel[];
    pageNumber: number;
    isLastPage: boolean;
  };
};

export type REPOSITORIES_ERROR_ACTION = {
  type: string;
  payload: Error;
}

export type SEARCH_TERMS_GET_ACTION = {
  type: string;
  payload: string[] | null;
};

export type SEARCH_TERMS_SET_ACTION = {
  type: string;
  payload: string[];
};

export type RepositoryAction =
  | REPOSITORIES_LOADING_ACTION
  | REPOSITORIES_SUCCESS_ACTION
  | REPOSITORIES_ERROR_ACTION;

export type PreviousSearchTermsAction =
  | SEARCH_TERMS_GET_ACTION 
  | SEARCH_TERMS_SET_ACTION 