import ImageTestStory from './images/narutosapo.jpeg'

import StoryItem from './StoryItem';

const Storys = () => {
  return (
    <div class="storys">
      <div class="seta-storys">
        <ion-icon name="chevron-forward-circle-sharp"></ion-icon>
      </div>
      
      <StoryItem name="Naruton" img={ImageTestStory} />
      <StoryItem name="Naruton" img={ImageTestStory} />
      <StoryItem name="Naruton" img={ImageTestStory} />
      <StoryItem name="Naruton" img={ImageTestStory} />
      <StoryItem name="Naruton" img={ImageTestStory} />
      <StoryItem name="Naruton" img={ImageTestStory} />
      <StoryItem name="Naruton" img={ImageTestStory} />
      <StoryItem name="Naruton" img={ImageTestStory} />

    </div>
  )
}

export default Storys;