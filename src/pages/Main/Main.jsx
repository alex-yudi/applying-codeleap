import './Main.css'
import ModalSignup from '../../components/ModalSignup/ModalSignup'
import Header from '../../components/Header/Header'
import PostWriter from '../../components/PostWriter/PostWriter'
import PostField from '../../components/PostField/PostField'
import { useState } from 'react'

function Main() {
  const [userIsLogged, setUserIsLogged] = useState(false)

  return (
    <div className="Main">
      {
        userIsLogged ?
          <>
            <Header />
            <PostWriter >
              What's on your mind?
            </PostWriter >

            <PostField />
          </> :

          <ModalSignup />
      }
    </div>
  )
}

export default Main
