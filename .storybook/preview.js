import { ThemeProvider } from 'styled-components'
import GlobalStytes from 'styles/global'

import theme from 'styles/theme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStytes />
      <Story />
    </ThemeProvider>
  )
]
