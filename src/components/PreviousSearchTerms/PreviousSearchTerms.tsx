import React, { FC, ReactElement } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../store";
import "./PreviousSearchTerms.scss";

const uid = (): string =>{
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export const PreviousSearchTerms: FC = (): ReactElement => {
  const { previousSearchTerms } = useSelector((state: AppState) => state.previousSearchTerms);

  return (
    <div id="previousSearchTermsList">
      <h4>Search history</h4>
      <ul>
        {previousSearchTerms?.map(term => <li key={uid()}>{term}</li>)}
      </ul>
    </div>)
};

