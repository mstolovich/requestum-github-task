import { Dispatch } from "redux";
import axios from "axios";

import {
  REPOSITORIES_LOADING_ACTION,
  REPOSITORIES_ERROR_ACTION,
  REPOSITORIES_SUCCESS_ACTION,
  SEARCH_TERMS_GET_ACTION,
  SEARCH_TERMS_SET_ACTION,
  REPOSITORIES_ERROR_ACTION_TYPE,
  REPOSITORIES_LOADING_ACTION_TYPE,
  REPOSITORIES_SUCCESS_ACTION_TYPE,
  SEARCH_TERMS_GET_ACTION_TYPE,
  SEARCH_TERMS_SET_ACTION_TYPE,
} from "./actionTypes";

import RepositoryModel from "../models/RepositoryModel";

const getGithubRepositoriesApiEndPoint = (
  termString: string,
  pageSize: number,
  pageNumber: number
) =>
  `https://api.github.com/search/repositories?q=${termString}&sort=stars&order=desc&per_page=${pageSize}&page=${pageNumber}`;

export const getPreviousSearchTermsAction = (
) => async (dispatch: Dispatch) => {
  const searchTerms: string | null= localStorage.getItem("searchTerms")
  let searchTermsArray: string[] | null = null;

  if(searchTerms) searchTermsArray = JSON.parse(searchTerms)
  
  const getSearchTerms: SEARCH_TERMS_GET_ACTION = {
    type: SEARCH_TERMS_GET_ACTION_TYPE, 
    payload: searchTermsArray,
  }
  dispatch(getSearchTerms);
} 

export const setPreviousSearchTermsAction = (
  searchTerm: string
  ) => async (dispatch: Dispatch) => {
    
    if(!searchTerm) return

    const searchTerms: string | null= localStorage.getItem("searchTerms")
    const addTerm = (
      searchTerm: string, 
      searchTerms: string | null): string[] =>{
      let searchTermsArray: string[];
      
      if(searchTerms) {
        searchTermsArray = JSON.parse(searchTerms)
        searchTermsArray.unshift(searchTerm)
        searchTermsArray = searchTermsArray.slice(0,5)
      }
      else searchTermsArray = [searchTerm]
      
      return searchTermsArray
    }

    const previousSearchedTerms = addTerm(searchTerm, searchTerms)

    localStorage.setItem("searchTerms", JSON.stringify(previousSearchedTerms))
    
    const getSearchTerms: SEARCH_TERMS_SET_ACTION = {
      type: SEARCH_TERMS_SET_ACTION_TYPE, 
      payload: previousSearchedTerms,
    }
    dispatch(getSearchTerms);
  } 


export const fetchRepositories = (
  searchTerm: string,
  pageNumber: number = 1
) => async (dispatch: Dispatch) => {
  const actionLoading: REPOSITORIES_LOADING_ACTION = {
    type: REPOSITORIES_LOADING_ACTION_TYPE,
    payload: searchTerm
  };

  dispatch(actionLoading);

  try {
    const pageSize = 10;
    const apiUrl = getGithubRepositoriesApiEndPoint(
      searchTerm,
      pageSize,
      pageNumber
    );

    const response = await axios.get(apiUrl);

    const items: RepositoryModel[] = response.data.items.map(
      (repo: any): RepositoryModel => {
        return {
          Id: repo.id,
          Description: repo.description,
          Name: repo.name,
          Url: repo.html_url,
          Language: repo.language
        };
      }
    );

    const isLastPage =
      (pageNumber - 1) * pageSize + response.data.items.length >=
      response.data.total_count;

    const actionSucces: REPOSITORIES_SUCCESS_ACTION = {
      type: REPOSITORIES_SUCCESS_ACTION_TYPE,
      payload: {
        items,
        pageNumber,
        isLastPage
      }
    };
    dispatch(actionSucces);
  } catch (error) {
    const actionError: REPOSITORIES_ERROR_ACTION = {
      type: REPOSITORIES_ERROR_ACTION_TYPE,
      payload: error
    };
    dispatch(actionError);
  }
};
