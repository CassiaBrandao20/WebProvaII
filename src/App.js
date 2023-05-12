import DataProvider from "./comnponentes/dataContext";
import Routers from "./comnponentes/router"


function App() {
  return (
    <div className="App">
      <DataProvider>
        <Routers />
      </DataProvider>
    </div>
  );
}

export default App;
