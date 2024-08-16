import { Routes, Route } from 'react-router-dom';
import ShowBooks from './components/ShowBooks';
import CreateBook from './components/CreateBooks';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ShowBooks />} />
        <Route path="/create" element={<CreateBook />} />
      </Routes>
    </div>
  );
}

export default App;
