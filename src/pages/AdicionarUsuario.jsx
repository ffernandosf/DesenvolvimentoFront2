import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../services/api';

const AdicionarUsuario = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', website: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Chama a API (simulação)
      await apiService.createUser(formData);
      
      // Salva localmente para exibir na lista
      const localUsers = JSON.parse(localStorage.getItem('newUsers') || '[]');
      const newUser = {
        id: Date.now(), // ID único baseado no timestamp
        ...formData
      };
      localUsers.push(newUser);
      localStorage.setItem('newUsers', JSON.stringify(localUsers));
      
      alert('Usuário criado com sucesso!');
      navigate('/home');
    } catch (error) {
      alert('Erro ao criar usuário');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Adicionar Usuário</h1>
      
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
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="text"
          placeholder="Telefone"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <input
          type="text"
          placeholder="Website"
          value={formData.website}
          onChange={(e) => setFormData({...formData, website: e.target.value})}
          style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '12px',
            backgroundColor: loading ? '#ccc' : '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Criando...' : 'Criar Usuário'}
        </button>
      </form>
    </div>
  );
};

export default AdicionarUsuario;