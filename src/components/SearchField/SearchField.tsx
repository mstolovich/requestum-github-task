import React, { ChangeEvent, FC, ReactElement, useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRepositories } from "../../store/actions";
import { setPreviousSearchTermsAction } from "../../store/actions";
import './SearchField.scss'

export const SearchField: FC = (): ReactElement => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  useEffect(()=>{  
    const delaySearch = setTimeout(()=>{
      dispatch(fetchRepositories(searchText))
      dispatch(setPreviousSearchTermsAction(searchText))
    }, 500)
    
    return () => clearTimeout(delaySearch)
  }, [searchText, dispatch])

  return (
    <>
      <input 
      onChange = {(e: ChangeEvent<HTMLInputElement>): void => setSearchText(e.target.value)}
      autoFocus
      id="gitHubSearch" 
      name="gitHubSearch"
      value={searchText}
      ></input>
    </>
  );
};



