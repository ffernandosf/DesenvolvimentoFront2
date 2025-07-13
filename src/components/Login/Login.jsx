import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../../data/db.json';
import { authService } from '../../services/api';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro('');
    
    // Busca usuários do localStorage e do db.json
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const allUsers = [...users.users, ...storedUsers];
    
    const user = allUsers.find(u => u.username === usuario && u.password === senha);
    
    if (user) {
      // Gera um token simulado (em produção viria do backend)
      const token = btoa(`${user.username}:${Date.now()}`);
      
      // Salva o token e dados do usuário
      authService.setToken(token);
      localStorage.setItem('user', JSON.stringify(user));
      
      navigate('/home');
    } else {
      setErro('Usuário ou senha inválidos');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Login</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Usuário"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px'
              }}
              required
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '16px'
              }}
              required
            />
          </div>
          {erro && (
            <div style={{
              color: 'red',
              marginBottom: '20px',
              textAlign: 'center',
              fontSize: '14px'
            }}>
              {erro}
            </div>
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Entrar
          </button>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            onClick={() => navigate('/registro')}
            style={{
              backgroundColor: 'transparent',
              color: '#007bff',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            Não tem conta? Cadastre-se
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;