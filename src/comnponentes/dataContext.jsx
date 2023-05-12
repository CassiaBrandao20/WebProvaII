import React, { createContext, useState } from 'react'

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [atividades, setAtividades] = useState([]);
  return (
    <DataContext.Provider value={{ atividades, setAtividades}}>
      {children}
    </DataContext.Provider>
  )
}