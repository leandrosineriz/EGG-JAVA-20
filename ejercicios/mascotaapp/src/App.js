import { RymApp } from './rymApp/components/public/RymApp';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/rym/*'} Component={RymApp} />
      </Routes>
    </div>
  );
}

export default App;
