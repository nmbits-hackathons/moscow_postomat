import turnover_light from "../../../Postamats/components/Settings/turnover_light.svg";
import services_light from "../../../Postamats/components/Settings/services_light.svg";
import marketplaces_light from "../../../Postamats/components/Settings/marketplaces_light.svg";
import coverage_light from "../../../Postamats/components/Settings/coverage_light.svg";
import geography_light from "../../../Postamats/components/Settings/geography_light.svg";
import {useEffect, useRef, useState} from "react";
import {useTheme} from "@mui/material/styles";
import rating_light from "../../../Postamats/components/Analytics/rating_svg.svg";
import search_light from "../../../Postamats/components/Analytics/search_light.svg";
import card_light_1 from "../../../Postamats/components/Analytics/card_light_1.svg";
import card_light_2 from "../../../Postamats/components/Analytics/card_light_2.svg";
import card_light_3 from "../../../Postamats/components/Analytics/card_light_3.svg";
import card_light_4 from "../../../Postamats/components/Analytics/card_light_4.svg";

export const FavouritesCards = () => {
  const theme = useTheme();

  // const [width, setWidth] = useState(0);
  // const ref = useRef(null);
  //
  // useEffect(() => {
  //   setWidth(ref.current.clientWidth);
  //   // alert(width)
  // });
  //
  // const scale = width / (298 + 367 + 34 * 2) / 2.1;
  // const h1 = 298 * scale;
  // const h2 = 367 * scale;
  // const mw = 24 * scale;
  // const mh = 20 * scale;

  return (<div style={{ marginLeft: '4px' }}>
    <div
      style={{ display: 'flex', flexDirection: 'column', width: '600px' }}
    >
      <img
        alt={'card_light'}
        src={card_light_1}
        style={{ marginBottom: '12px' }}
      />
      <img
        alt={'card_light'}
        src={card_light_2}
        style={{ marginBottom: '12px' }}
      />
      <img
        alt={'card_light'}
        src={card_light_3}
        style={{ marginBottom: '12px' }}
      />
      <img
        alt={'card_light'}
        src={card_light_4}
        style={{ marginBottom: '12px' }}
      />
    </div>
  </div>);
};
