import React from "react";

import PostBox from "./PostBox";

import UserImgTest from './images/naruto.jpeg';
import LikedImg from './images/itachi.jpeg';
import Post1 from './images/dog1.png';

const Conteudo = () => {

  const postsList = [
    {
      id:1,
      name:"Narutin",
      userImg: UserImgTest,
      postImg: Post1,
    },
    {
      id:2,
      name:"Narutin",
      userImg: UserImgTest,
      postImg: Post1,
    },
    {
      id:3,
      name:"Narutin",
      userImg: UserImgTest,
      postImg: Post1,
    }
  ]

  return (

    <div class="conteudo">
      {
        postsList.map((post, key) => {
          return (
            <PostBox key={key} id={post.id} name={post.name} userImg={post.userImg} post={post.postImg} likedImg={LikedImg} />
          )
        })
      }
    </div>

  )
}

export default Conteudo;