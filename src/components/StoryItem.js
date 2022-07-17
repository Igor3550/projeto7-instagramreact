import BackgroundStory from './images/stories_background.jpg'

const StoryItem = (props) => {
  return (
    <div class="story">
      <div class="story-image">
        <img class="background" src={BackgroundStory} />
        <img src={props.img} alt="imagenStory"/>
      </div>
      <p>{props.name}</p>
    </div>
  )
}

export default StoryItem;