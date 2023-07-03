import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "'Bacasime Antique', sans-serif",
    body: "'Playfair Display', serif",
  },
});

export default theme;
