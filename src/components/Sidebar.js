import SugestaoItem  from './SugestaoItem';

import HashiramaPerfil from './images/hashirama.jpeg'
import ImageTest from './images/hinata.jpeg'

const Sidebar = () => {
  return (
    <div class="sidebar">
      <div class="caixa-user">
        <img src={HashiramaPerfil} />
        <div>
          <p>hashi</p>        
          <p>Hashirama</p>
        </div>
      </div>

      <div class="caixa-sugestao">
        <div>
          <p>Sugetões para você</p>
          <button><p>Ver tudo</p></button>
        </div>

        <SugestaoItem name="Hinata" img={ImageTest} label="segue você" />
        <SugestaoItem name="Naruto" img={ImageTest} label="Novo no Instagram" />
        <SugestaoItem name="Sasuke" img={ImageTest} label="segue você" />

        <p class="legenda-sidebar">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</p>
        <p class="legenda-sidebar">© 2021 INSTAGRAM DO FACEBOOK</p>
      </div>    
    </div>
  )
}

export default Sidebar;