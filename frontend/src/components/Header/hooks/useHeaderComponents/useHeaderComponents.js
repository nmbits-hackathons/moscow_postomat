import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  MAIN_PATH,
  POSTAMATS_PATH,
  postamatsPath,
  FAVOURITES_PATH,
  DOCUMENTS_PATH
} from '../../../../constants/path';
import {MapsHeaderAction, PostamatsHeaderActions, DocHeaderAction, FavHeaderAction} from '../../components';

export const useHeaderComponents = ({ showFilters, setShowFilters }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  return useMemo(() => {
    if (path === MAIN_PATH)
      return <MapsHeaderAction {...{ showFilters, setShowFilters }} />;
    if (postamatsPath.some((el) => el === path))
      return <PostamatsHeaderActions />;
    if (path === FAVOURITES_PATH) {
      return <FavHeaderAction/>;
    }
    if (path === DOCUMENTS_PATH) {
      return <DocHeaderAction/>;
    }
  }, [path, showFilters]);
};
