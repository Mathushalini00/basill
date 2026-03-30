import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import StoriaPage from './pages/StoriaPage';
import ProdottiPage from './pages/ProdottiPage';
import QualitaPage from './pages/QualitaPage';
import ContattiPage from './pages/ContattiPage';

export default function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/storia" element={<StoriaPage />} />
            <Route path="/prodotti" element={<ProdottiPage />} />
            <Route path="/qualita" element={<QualitaPage />} />
            <Route path="/contatti" element={<ContattiPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </LanguageProvider>
  );
}
