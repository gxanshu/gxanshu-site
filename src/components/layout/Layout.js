import { Box } from "@chakra-ui/react";

export function Layout({ children, styles }) {
  return (
    <Box py={28} sx={styles}>
      {children}
    </Box>
  );
}
