import Maininformation from '../Maininformation/Maininformation';
import About from '../About/About';
import Skills from '../Skills/Skills';

const Main = () => {
  return(
    <main className='main'>
      <Maininformation />
      <About />
      <Skills />
    </main>
  );
}

export { Main };