import { Typography, useTheme, Link } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import src1 from "../../assets/portfolio.png";
const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Creado por
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        /*src="http://localhost:3001/assets/info4.jpeg" */
        src={src1}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Julio Méndez</Typography>
        
        <Link href="https://juliolilo.github.io/Portfolio-Personal/" target="_blank">Ir a la web</Link>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        
        Si quieres ver más proyectos o saber más de mí te invito a que entres en mi página web.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
