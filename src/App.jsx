import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';
import TechPortfolio from './pages/TechPortfolio';
import Innovations from './pages/Innovations';
import { seqamData, greenShiftData, mapekData, ceaData, wsnData } from './data/caseStudies';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="wsn" element={<CaseStudy data={wsnData} />} />
                    <Route path="seqam" element={<CaseStudy data={seqamData} />} />
                    <Route path="greenshift" element={<CaseStudy data={greenShiftData} />} />
                    <Route path="mape-k" element={<CaseStudy data={mapekData} />} />
                    <Route path="cea" element={<CaseStudy data={ceaData} />} />
                    <Route path="tech-portfolio" element={<TechPortfolio />} />
                    <Route path="innovations" element={<Innovations />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
