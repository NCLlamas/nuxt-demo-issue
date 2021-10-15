import Vue from "vue"
import Chakra from "@chakra-ui/vue"
//@ts-ignore
import logoPath from "@/static/logo-primary.svg"

const customIcons = {
  logo: {
    path: `<path fill="currentColor" d="M30.1759 22.4399C30.1759 24.0969 28.8196 25.4532 27.1626 25.4532L26.0798 30.2897L20.4185 25.4532H12.9143C11.2573 25.4532 9.90211 24.0969 9.90211 22.4399V13.9896C9.90211 12.3325 11.2573 10.9763 12.9143 10.9763H27.1626C28.8196 10.9763 30.1759 12.3325 30.1759 13.9896V22.4399ZM20.039 0.907227C9.47336 0.907227 0.908203 9.47239 0.908203 20.038C0.908203 30.6026 9.47336 39.1677 20.039 39.1677C30.6035 39.1677 39.1687 30.6026 39.1687 20.038C39.1687 9.47239 30.6035 0.907227 20.039 0.907227Z" />`,
    // If the icon's viewBox is `0 0 24 24`, you can ignore `viewBox`
    viewBox: "0 0 40 40",
  },
};

// Step 2: Add the custom icon to the Chakra plugin
Vue.use(Chakra, {
  icons: {
    extend: {
      ...customIcons
    }
  }
})
