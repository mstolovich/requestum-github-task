import React, { FC, ReactElement } from "react";
import { PreviousSearchTerms } from "../PreviousSearchTerms";
import { SearchField } from "../SearchField";
import "./SearchPanel.scss";



export const SearchPanel: FC = (): ReactElement => {
  return (
    <div id="searchPanel">
        <SearchField />
        <PreviousSearchTerms />
    </div>
    )
};

