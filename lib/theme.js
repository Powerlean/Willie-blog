import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { prismDarkTheme, prismLightTheme } from "./prism";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#f8f8f5", "#202023")(props),
      fontFamily:
        '-ui-monospace,SFMono-Regular,"SF Mono, Menlo",Consolas,Liberation Mono,monospace',
      lineHeight: 'base',
    },
   ':focus:not(:focus-visible):not([role="dialog"]):not([role="menu"])' : {
        shadow: mode(
          "0 1px 1.5px -1px rgba(0, 0, 0, 0.1), 0 .4px .6px -1px rgba(0, 0, 0, 0.05) !important",
          "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px .5px 1px, rgba(0, 0, 0, 0.4) 0px 1.5px 4px !important"
        ),
     }
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    basestyle: (props) => ({
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlinOffset: 3,
    }),
  },
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  theme: mode(prismLightTheme, prismDarkTheme),
  config,
  components,
  styles,
});

export default theme;
