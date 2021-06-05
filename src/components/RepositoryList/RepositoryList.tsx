import React, { FC, ReactElement } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../store";
import RepositoryModel from "../../store/models/RepositoryModel";
import { Loader } from "../Loader";
import { RepositoryItem } from "../RepositoryItem";
import "./RepositoryList.scss";

export const RepositoryList: FC = (): ReactElement => {
  const { items, isLoading } = useSelector((state: AppState) => state.repositories);

  const repos: ReactElement[] = items.map((repo: RepositoryModel) => (
    <RepositoryItem key={repo.Id.toString()} {...repo} />
  ));

  return (
  <div id="repositoryList">
    { isLoading ? <Loader/> : repos }
  </div>);
};

