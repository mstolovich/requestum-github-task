import React, { FC }  from "react";
import RepositoryModel from "../../store/models/RepositoryModel";
import "./RepositoryItem.scss"

export const RepositoryItem: FC<RepositoryModel> = ({
  Name,
  Language,
  Description,
  Url
}) => {
  return (
    <div 
      id="repoCard"
    >
    <a href={Url} target="_blank" rel="noreferrer noopener">
      <h3 id="repoName">{Name}</h3>
      <div>Language: {Language}</div>
      <div>Description: {Description}</div>
    </a>
    </div>
      );
};

