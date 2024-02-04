/*
 * File           : MAvatar.js
 * Project        : explore-the-nature-client-side
 * Created Date   : Su 04 Feb 2024 11:13:51
 * Description    : <<description>>
 *
 *
 * Author         : Tanzim Ahmed
 * Email          : tanzim.ahmed1@g.bracu.ac.bd
 * ----------------------
 * Last Modified  : Sun Feb 04 2024
 * Modified By    : Tanzim Ahmed
 * ------------------------
 */

import PropTypes from "prop-types";
import { forwardRef } from "react";
// material
import { Avatar, useTheme } from "@mui/material";

// ----------------------------------------------------------------------

const MAvatar = forwardRef(({ color = "default", sx, children, ...other }, ref) => {
  const theme = useTheme();

  if (color === "default") {
    return (
      <Avatar ref={ref} sx={sx} {...other}>
        {children}
      </Avatar>
    );
  }

  return (
    <Avatar
      ref={ref}
      sx={{
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette[color].contrastText,
        backgroundColor: theme.palette[color].main,
        ...sx,
      }}
      {...other}
    >
      {children}
    </Avatar>
  );
});

MAvatar.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
  color: PropTypes.oneOf(["default", "primary", "secondary", "info", "success", "warning", "error"]),
};

export default MAvatar;
