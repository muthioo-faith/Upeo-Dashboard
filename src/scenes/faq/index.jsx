import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Answered Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Area Questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          1.A right pyramid has a square based of side 12cm and slant height of 20cm
Calculate: a)its total surface area
                  b)its volume
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important  Area Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          2.What shape has 2 flat faces, 1 curved face, 2 edges and 0 vertices?.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favorite Question on Area
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          3.The area of a soccer field is 56 square yards. The length of
one side of the field is 8 yards. What is the width of the field?.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Area Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          4.The area of a soccer field is 56 square yards. The length of
one side of the field is 8 yards. What is the width of the field?.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final Area Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* //added Typography */}
          <Typography>
          5.The area of a soccer field is 56 square yards. The length of
one side of the field is 8 yards. What is the width of the field?.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
