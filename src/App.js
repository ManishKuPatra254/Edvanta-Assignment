import './App.css';
import { InnerHome } from './InnerHome/InnerHome';
import { DataContent } from './DataContent/DataContent';

function App() {
  return (
    <div className="App">
      <DataContent>
        <InnerHome />
      </DataContent>
    </div>
  );
}

export default App;
