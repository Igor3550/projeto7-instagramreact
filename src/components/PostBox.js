import React from "react";
/*if(localStorage.getItem('arrayOfIDs') === null){
    localStorage.setItem('arrayOfIDs' , JSON.stringify([]));
    arrayOfIDs = localStorage.getItem('arrayOfIDs');
}else{
    arrayOfIDs = localStorage.getItem('arrayOfIDs');
} */


const PostBox = (props) => {
  
  const [likedPostsIdList, setLikedPostsIdList] = React.useState(getLikedIds());

  const likedListIds = getLikedIds()

  const LikedHeart = () => {
    return (<ion-icon name="heart" class="likedHeart" onClick={() => {remvLikeClick()}} ></ion-icon>)
  }
  const UnlikedHeart = () => {
    return (<ion-icon name="heart-outline" onClick={() => {likeClick()}}></ion-icon>)
  }

  function getLikedIds () {
    let arrayOfIDs;
    if(localStorage.getItem('arrayOfIDs') === null){
      localStorage.setItem('arrayOfIDs' , JSON.stringify([]));
      arrayOfIDs = localStorage.getItem('arrayOfIDs');
    }else{
      arrayOfIDs = localStorage.getItem('arrayOfIDs');
    } 
    return JSON.parse(arrayOfIDs);
  }

  console.log(getLikedIds())

  function isLiked (id) {
    if(likedPostsIdList.includes(id)){
      return true;
    }else{
      return false;
    }
  }

  function likeClick () {
    likedListIds.push(props.id)
    console.log(likedListIds)
    
    localStorage.setItem('arrayOfIDs' , JSON.stringify(likedListIds));

    setLikedPostsIdList(getLikedIds());
  }

  function remvLikeClick() {

    likedListIds.map((item, index) => {
      if(item === props.id){
        likedListIds.splice(index, 1)
      }
    })

    localStorage.setItem('arrayOfIDs' , JSON.stringify(likedListIds));

    setLikedPostsIdList(getLikedIds());
    
  }

  return (
    <div class="caixa-post">
      <div class="topo">
        <div class="post-profile">
          <img src={props.userImg}/>
          <p>{props.name}</p>
        </div>
        <ion-icon name="ellipsis-horizontal-sharp"></ion-icon>
      </div>
      <div class="post">
        <img src={props.post} onClick={() => {likeClick()}} />
      </div>
      <div class="rodape">
        <div class="caixa-rodape-icones">
          <div>
            {isLiked(props.id) ? <LikedHeart /> : <UnlikedHeart />}
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
        <div class="curtido-caixa">
          <img src={props.likedImg}/>
          <p>Curtido por <strong>itachi</strong> e <strong>outras 10.025 pessoas</strong></p>
        </div>
      </div>
    </div>
  )
} 

export default PostBox;