import Re from './components/Re';
import Play from './components/Play';
import About from './components/About';
import Peets from './components/Peets';
import Soler from './components/Soler';
import Header from './components/Header';
import Flower from './components/Flower';
import SFMoma from './components/SFMoma';
import Projects from './components/Projects';
import Justworks from './components/Justworks';
import SniffSniff from './components/SniffSniff';
import ScrollToTop from './components/ScrollToTop';
import OpenProject from './components/OpenProject';
import CommunityGearbox from './components/CommunityGearbox';
import InnovativeDesign from './components/InnovativeDesign';
import Pinterest from './components/Pinterest';
import Tinder from './components/Tinder';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JustworksEditing from './components/JustworksEditing';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/play" element={<Play />} />
          <Route path="/about" element={<About />} />
          <Route path="/flower" element={<Flower />} />
          <Route path="/peets" element={<Peets />} />
          <Route path="/re" element={<Re />} />
          <Route path="/open-project" element={<OpenProject />} />
          <Route path="/sniff-sniff" element={<SniffSniff />} />
          <Route path="/sf-moma" element={<SFMoma />} />
          <Route path="/community-gearbox" element={<CommunityGearbox />} />
          <Route path="/justworks-mobile" element={<Justworks />} />
          <Route path="/justworks-editing" element={<JustworksEditing />} />
          <Route path="/innovative-design" element={<InnovativeDesign />} />
          <Route path="/soler" element={<Soler />} />
          <Route path="/pinterest" element={<Pinterest />} />
          <Route path="/tinder" element={<Tinder />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
