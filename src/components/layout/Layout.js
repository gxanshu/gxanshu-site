import { Box } from "@chakra-ui/react";

export default function Layout({ children, styles }) {
  return (
    <Box py={28} sx={styles}>
      {children}
    </Box>
  );
}
