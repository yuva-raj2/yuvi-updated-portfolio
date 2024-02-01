import './App.css';
import HeaderNav from './Header/HeaderNav';
import Main from './Main/Main';
import About from './About/About';
import Activity from './Activity/Activity';
import Dailyuse from './Dailyuse/Dailyuse';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
function App() {
  return (
    <div className='App'>
      <div className='Background'>
       <div className='background-color'>
         <HeaderNav/>
         <Main/>
       </div>
        <About/>
        <Activity/>
        <Dailyuse/>
        <Projects/>
        <Experience/>
        <Skills/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;

