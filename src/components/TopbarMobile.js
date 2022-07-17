import Logo from './images/logo.png'

const TopbarMobile = () => {
  return (
    <div class="area-topo-mobile">
      <div class="topo-mobile">
        <ion-icon name="logo-instagram"></ion-icon>
        <div>
          <img src={Logo} />
        </div>
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
    </div>
  )
}

export default TopbarMobile;