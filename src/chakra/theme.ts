import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";
import { Input } from "./input";

export const theme = extendTheme({
  colors: {
    brand: {
      // 100: "#FF3C00",
      100: "#FB246B",
      // 100: "#000000",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: "blue.100",
      },
    }),
  },
  components: {
    Button,
    // Input, // not working for some reason - come back to this
  },
});
