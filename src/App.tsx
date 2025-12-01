//import { AutocompleteInput } from './components/Autocomplete';
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { DashboardPage } from "./pages/DashboardPage";

function App() {

  // const countries = [
  //   { id: 1, label: 'Perú and per2', code: 'TTT' },
  //   { id: 2, label: 'México and mex2', code: 'SSS' },
  //   { id: 3, label: 'Colombia', code: 'CO' },
  //   { id: 4, label: 'Argentina', code: 'AR' },
  // ];

  // const handleSelect = (item: { id: string | number; label: string; code: string }) => {
  //   //alert(`Seleccionaste: ${item.label} (${item.code})`);
  // };

  // <div style={{ padding: 40 }}>
  //   <h2>Buscar país (fuzzy + objetos)</h2>
  //   <AutocompleteInput suggestions={countries} onSelect={handleSelect} />
  // </div>

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
