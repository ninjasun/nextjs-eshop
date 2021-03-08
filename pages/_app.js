import '../styles/globals.css'
import Nav from '../components/nav/Nav'
import { CartContext, useCartState } from '../hooks/use-cart'

function MyApp ({ Component, pageProps }) {
  const cartState = useCartState()
  return (
    <CartContext.Provider value={cartState}>
      <Nav />
      <Component {...pageProps} />
    </CartContext.Provider>
  )
}

export default MyApp
