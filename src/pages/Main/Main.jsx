import './Main.css'
import ModalSignup from '../../components/ModalSignup/ModalSignup'
import Header from '../../components/Header/Header'
import PostWriter from '../../components/PostWriter/PostWriter'
import PostField from '../../components/PostField/PostField'

import useUser from '../../hooks/useUser'

function Main() {
  const { userIsLogged } = useUser()

  return (
    <div className="Main">
      {
        userIsLogged ?
          <>
            <Header />
            <PostWriter />
            <PostField />
          </> :

          <ModalSignup />
      }
    </div>
  )
}

export default Main
