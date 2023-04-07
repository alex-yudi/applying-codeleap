import './Main.css'
import ModalSignup from '../../components/ModalSignup/ModalSignup'
import Header from '../../components/Header/Header'
import PostWriter from '../../components/PostWriter/PostWriter'
import PostField from '../../components/PostField/PostField'

import useUser from '../../hooks/useUser'
import { useEffect } from 'react'

import { codeLeap } from '../../connections/codeLeap'

function Main() {
  const { userIsLogged, postsList, setPostsList, setUserSignup } = useUser()

  const getCodeLeap = async (pageNumber) => {
    const response = await codeLeap.get('/')
    setPostsList(response.data.results)
  }


  const setUserLogged = () => {
    setUserSignup(localStorage.getItem('userLogged'))
  }


  useEffect(() => {
    setUserLogged()
    getCodeLeap()
  }, [postsList])

  return (
    <div className="Main">
      {
        userIsLogged ?
          <>
            <Header />
            <PostWriter />
            {postsList.map((postData) => (
              <PostField
                key={postData.id}
                postData={postData}
              />
            ))}
          </> :

          <ModalSignup />
      }
    </div>
  )
}

export default Main
