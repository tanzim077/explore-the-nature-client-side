import { motion } from "framer-motion";
import PropTypes from "prop-types";
// material
import { Box } from "@mui/material";
//
import { varMediumClick, varSmallClick } from "./variants";

// ----------------------------------------------------------------------

ButtonAnimate.propTypes = {
  mediumClick: PropTypes.bool,
  children: PropTypes.node,
  sx: PropTypes.object,
};

export default function ButtonAnimate({ mediumClick = false, children, sx, ...other }) {
  return (
    <Box
      component={motion.div}
      whileTap="tap"
      whileHover="hover"
      variants={mediumClick ? varMediumClick : varSmallClick}
      sx={{ display: "inline-flex", ...sx }}
      {...other}
    >
      {children}
    </Box>
  );
}
