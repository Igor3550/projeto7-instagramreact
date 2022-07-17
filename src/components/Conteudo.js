import PostBox from "./PostBox";

import UserImgTest from './images/naruto.jpeg'
import LikedImg from './images/itachi.jpeg'
import Post1 from './images/dog1.png'

const Conteudo = () => {
  return (

    <div class="conteudo">
      <PostBox name="Narutin" userImg={UserImgTest} post={Post1} likedImg={LikedImg}/>
      <PostBox name="Narutin" userImg={UserImgTest} post={Post1} likedImg={LikedImg}/>
      <PostBox name="Narutin" userImg={UserImgTest} post={Post1} likedImg={LikedImg}/>
    </div>

  )
}

export default Conteudo;