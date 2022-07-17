import Avatar from '../img/eu.jpg'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
  return (<aside id='sidebar'>
    <img src={Avatar} alt="Andre Leal" />
    <p className="title"> Desenvolvedor</p>
    <SocialNetworks />
    <InformationContainer/>
    <a href={'https://drive.google.com/file/d/1zEgrQC7CCeQSBHsw35qlIUqC_46gPjEO/view?usp=sharing'} target='blank' className="btn">Download Curriculo</a>
  </aside>
    
  )
}

export default Sidebar