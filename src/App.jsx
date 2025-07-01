import React from 'react';

// Importa o componente Login do caminho correto.
// A convenção é usar PascalCase (Login) para componentes.
import Login from './components/login/Login';


function App() {
  return (
  
    <div className="App">
      {/* Aqui estamos renderizando o componente de Login */}
      <Login />
    </div>
  );
}

// Exporta o componente App para que ele possa ser usado no ponto de entrada da aplicação (main.jsx).
export default App;