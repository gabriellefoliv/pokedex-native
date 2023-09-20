import 'styled-components'

import theme from './theme'

declare module 'styled-components' {
    type ThemeType = typeof theme
    
    export interface DefaultTheme extends ThemeType{}
}

// DefaultTheme que é do próprio styled-components extende para ThemeType que é o que foi criado. Usando $theme.colors. 
// deve-se mostrar todas as cores disponíveis - uma tipagem.
// ajuda na programação, poupa tempo