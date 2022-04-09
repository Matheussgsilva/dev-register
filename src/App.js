import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { Page3 } from './pages/Page3';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page1 />} />
        <Route path='/step2' element={<Page2 />} />
        <Route path='/search/:name' element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
