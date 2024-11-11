import { Box } from "@mui/material";
import React from "react";

type RootLayoutProps = {
  children?: React.ReactNode;
};
const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Box
        component="div"
        display="flex"
        width="100%"
        minHeight="100vh"
        justifyContent="center"
        sx={{
          background: "linear-gradient(to right, #e0eafc, #cfdef3)",
        }}
      >
        <Box
          m={4}
          component="div"
          width="80%"
          sx={{
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            background: "rgba(246, 199, 199, 0.09)",
            backdropFilter: "blur(2.9px)",
            WebkitBackdropFilter: "blur(2.9px)", // For Safari support
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};
export default RootLayout;
