/* eslint-disable react/display-name */
/*
 * Filename: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side/src/component/shared/Page/page.jsx
 * Path: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side
 * Created Date: Sunday, February 4th 2024, 9:46:37 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */
import PropTypes from "prop-types";
import { forwardRef } from "react";
import { Helmet } from "react-helmet-async";
// material
import { Box } from "@mui/material";
// utils

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = "", ...other }, ref) => {
  //   const { pathname } = useLocation();

  //   const sendPageViewEvent = useCallback(() => {
  //     track.pageview({
  //       page_path: pathname,
  //     });
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  //   useEffect(() => {
  //     sendPageViewEvent();
  //   }, [sendPageViewEvent]);

  return (
    <Box ref={ref} {...other}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </Box>
  );
});

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Page;
