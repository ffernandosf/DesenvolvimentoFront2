import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../data/db.json';

const Registro = () => {
  const [formData, setFormData] = useState({ name: '', username: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Pega usuários do localStorage ou usa os padrão do db.json
      const storedUsers = JSON.parse(localStorage.getItem('users') || JSON.stringify(users.users));
      
      // Verifica se username já existe
      const userExists = storedUsers.find(u => u.username === formData.username);
      if (userExists) {
        setMessage('Nome de usuário já existe!');
        setLoading(false);
        return;
      }

      // Cria novo usuário
      const newUser = {
        id: storedUsers.length + 1,
        name: formData.name,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: 'User'
      };

      // Salva no localStorage
      const updatedUsers = [...storedUsers, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      
      setMessage('Usuário criado com sucesso!');
      setFormData({ name: '', username: '', email: '', password: '' });
      
      // Redireciona para login após 2 segundos
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      setMessage('Erro ao criar usuário');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Registro de Usuário</h1>
      
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '15px' }}>
        <input
          type="text"
          placeholder="Nome"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="text"
          placeholder="Nome de usuário"
          value={formData.username}
          onChange={(e) => setFormData({...formData, username: e.target.value})}
          required
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
          required
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '12px',
            backgroundColor: loading ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Criando...' : 'Criar Usuário'}
        </button>
      </form>
      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            backgroundColor: 'transparent',
            color: '#007bff',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}
        >
          Já tem conta? Fazer login
        </button>
      </div>
      
      {message && (
        <div style={{
          marginTop: '20px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: message.includes('sucesso') ? '#d4edda' : '#f8d7da',
          color: message.includes('sucesso') ? '#155724' : '#721c24',
          border: `1px solid ${message.includes('sucesso') ? '#c3e6cb' : '#f5c6cb'}`,
          borderRadius: '4px'
        }}>
          {message}
        </div>
      )}
    </div>
  );
};

export default Registro;