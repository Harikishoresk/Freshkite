import { useState } from 'react'
import FileUploader from './components/FileUploader'
import './index.css'
import TableData from './components/TableData'

function App() {
  const [excelData, setExcelData] = useState([]);

  return (
    <>
      <FileUploader setData = {setExcelData}/>
        <TableData data = {excelData}/>
    </>
  )
}

export default App
