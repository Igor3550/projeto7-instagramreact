import ReactDom from "react-dom";

import Topbar from './components/Topbar';
import TopbarMobile from "./components/TopbarMobile";
import Page from './components/Page';
import Bottombar from './components/Bottombar'

const App = () => {
  return (
    <div>
      <Topbar />
      <TopbarMobile />
      <Page />
      <Bottombar />
    </div>
  )
}

ReactDom.render(App(), document.querySelector('.root'));