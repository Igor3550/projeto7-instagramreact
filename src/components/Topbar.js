import React from 'react'

import Logo from "./images/logo.png";

const Topbar = () => {
  return (
    <div class="area-topo">
      <div class="topo">
        <div class="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <img class="borda" src={Logo} alt="logoInstagram" />
        </div>
        <input type="text" placeholder="Pesquisar" />
        <div class="icones-topo">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
      </div>
    </div>
  )
}

export default Topbar;