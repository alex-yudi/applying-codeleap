import './Main.css'
import ModalSignup from '../../components/ModalSignup/ModalSignup'
import Header from '../../components/Header/Header'
import PostWriter from '../../components/PostWriter/PostWriter'
import PostField from '../../components/PostField/PostField'

function Main() {
  return (
    <div className="Main">
      {/*       <ModalSignup />
 */}

      <Header />
      <PostWriter />
      <PostField />
    </div>
  )
}

export default Main
