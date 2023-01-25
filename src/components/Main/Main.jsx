import Maininformation from '../Maininformation/Maininformation';
import About from '../About/About';
import Skills from '../Skills/Skills';
import { Portfolio } from '../Portfolio/Portfolio';
import { Contacts } from '../Contacts/Contacts';

const Main = () => {
  return(
    <main className='main'>
      <Maininformation />
      <About />
      <Skills />
      <Portfolio />
      <Contacts />
    </main>
  );
}

export { Main };