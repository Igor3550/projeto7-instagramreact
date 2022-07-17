const SugestaoItem = (props) => {
  return (
    <div class="sugestao">
      <div class="sugestao-info">
        <img src={props.img} />
        <div>
          <p>{props.name}</p>
          <p>{props.label}</p>
        </div>
      </div>
      <button>seguir</button>
    </div>
  )
}

export default SugestaoItem;