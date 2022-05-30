import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVuetify } from 'vuetify'

const lightTheme = {
  dark: false,
  colors: {
    primary: '#FFD500',
    secondary: '#FF3332',
    accent: '#774820',
    brown: '#774820',
    pink: '#F6C8C8',
    peach: '#FAA4A4',
    background: '#ECEFF1',
  },
}

const darkTheme = {
  dark: true,
  colors: {
    primary: '#D9B500',
    accent: '#774820',
    brown: '#774820',
    pink: '#F6C8C8',
    peach: '#FAA4A4',
    background: '#263238',
  },
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
      darkTheme,
    },
  },
})
