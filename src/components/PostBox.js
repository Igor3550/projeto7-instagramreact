const PostBox = (props) => {
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
        <img src={props.post}/>
      </div>
      <div class="rodape">
        <div class="caixa-rodape-icones">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
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