import React, { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  MAIN_PATH,
  POSTAMATS_PATH,
  postamatsPath,
} from '../../../../constants/path';
import { MapsHeaderAction, PostamatsHeaderActions } from '../../components';

export const useHeaderComponents = ({ showFilters, setShowFilters }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  return useMemo(() => {
    if (path === MAIN_PATH)
      return <MapsHeaderAction {...{ showFilters, setShowFilters }} />;
    if (postamatsPath.some((el) => el === path))
      return <PostamatsHeaderActions />;
  }, [path, showFilters]);
};
