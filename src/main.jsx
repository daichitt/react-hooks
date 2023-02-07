import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const Codeinfo = {
  name: "yamada",
  age: 22
}
const CodeContext = createContext(Codeinfo);

ReactDOM.createRoot(document.getElementById('root')).render(
  <CodeContext.Provider value={Codeinfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CodeContext.Provider>
);

export default CodeContext;
