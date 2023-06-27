import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    title: {
      text: '#cd2b2b'
    },
    aboutColor: {
      text: '#be4b5e',
      background: '#fdfdfd',
      backing: '#df4069',
      educationBacking1: '#6d8aaf',
      educationBacking2: '#668a6a'
    },
    skills: {
      header: '#9aa7b0',
      background: '#576067',
      backgroundAlt: '#f4f7f8',
      meterHeader: '#778e9f',
      meterBackground: '#e0e7ec',
      highlight: '#63dcc0',
      text: '#293c4c'
    },
    experience: {
      background: [ '#354b66', '#3f6c5a'],
    },
    projects: {
      background: '#272630',
      background2: '#47a5b1',
      background3: '#b14779',
    },
    contact: {
      background: '#575660'
    },
    endCap: {
      background: '#e3e3e3'
    }
  },
  typography: {
    fontFamily: `'Roboto', sans-serif`,
    fontWeightLight: 100,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 700,
    navBar: {
      fontFamily: 'Roboto Condensed',
      fontWeightLight: 300,
      fontWeightRegular: 400,
    },
    sectionHeader: {
      fontFamily: 'Quicksand',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      likelyTouchScreen: 1181,
      loginLogoText: 520,
      navBarSearch: 710,
      navBarSellIcon: 352,
      sideDrawerFullWidth: 572,
      cartDrawerItemDisplay: 400,
      specialDepartmentDealsText: 404,
      advancedSearchDiplay: 706,
      productDetailsDisplay: 1279,
      productDetailsButtons: 767,
      productDetailsContainerMedium: 800,
      productDetailsContainerSmall: 500,
      orderHistoryNumberAndStatusText: 425,
      listingsFilterDisplay: 786,
      sellFormImagePreview: 538,
      cartItemDisplay: 1044,
      cartPriceDisplay: 798,
      cartItemDisplayVertical: 575,
      productModalMedium: 1050,
      productModalSmall: 760,
      productModalTiny: 415,
      messageModalSmall: 523,
      checkoutMedium: 982,
      checkoutSmall: 740,
      checkoutTiny: 372,
    },
  },
  rootMargins: {
    scrollInViewSection: '-50% 0px -50% 0px'
  },
})