import FetchUserData from './components/FetchUserData';
import {Route,Routes} from 'react-router-dom';
import DetailUser from './components/DetailUser';
import CheckRecord from './components/CheckRecord';
function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<FetchUserData />} />
        <Route path="/:id" element={<DetailUser />} />
        <Route path="/followers" element={<CheckRecord />} />
      </Routes>
    </div>
  );
}

export default App;
