
import { Route, Routes } from 'react-router-dom';
import { Usuarios } from './pages/Usuarios';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Usuarios />} />
    </Routes>
  )
}

export default App
