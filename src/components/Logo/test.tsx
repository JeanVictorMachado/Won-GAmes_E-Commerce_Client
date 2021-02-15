import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('shoud render a white label by default', () => {
    // renderiza o componente
    renderWithTheme(<Logo />)

    // seleciona elemneto e espera que ele saje da cor  #FAFAFA
    // parentElement seleciona o pai do que quero testar
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('shoud render a black label by default', () => {
    renderWithTheme(<Logo color="black" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('shoud render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('shoud render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })
})
