import React, { useState } from 'react'
import {DataProvider} from "./context/DataContext.jsx";
import ExcelFile from "./components/ExcelFile";
import LiveFilters from './components/LiveFilters.jsx';
import ChartDisplay from './components/ChartDisplay.jsx';
import TableData from './components/TableData.jsx';


function App() {
  const [fileLoaded, setFileLoaded] = useState(false);
  return (
    <>
      <DataProvider>
        <div className='p-4'>
          <h1 className='text-2xl font-bold mb-4'>Casino Data Visualization</h1>
          <ExcelFile FileLoaded={() => setFileLoaded(true)}/>
          {fileLoaded && (
            <>
              <LiveFilters />
              <ChartDisplay />
            </>
          )}
          <TableData />

        </div>
      </DataProvider>
    </>
  )
}

export default App
