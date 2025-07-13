import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apiService } from '../services/api';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', email: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await apiService.getUsers();
      
      // Adiciona usuários criados localmente
      const localUsers = JSON.parse(localStorage.getItem('newUsers') || '[]');
      const allUsers = [...data, ...localUsers];
      
      setUsers(allUsers);
    } catch (err) {
      setError('Erro ao carregar usuários');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user.id);
    setEditForm({ name: user.name, email: user.email });
  };

  const handleUpdate = async (id) => {
    try {
      // Verifica se é usuário local ou da API
      const localUsers = JSON.parse(localStorage.getItem('newUsers') || '[]');
      const isLocalUser = localUsers.some(u => u.id === id);
      
      if (isLocalUser) {
        // Atualiza usuário local
        const updatedLocalUsers = localUsers.map(u => u.id === id ? { ...u, ...editForm } : u);
        localStorage.setItem('newUsers', JSON.stringify(updatedLocalUsers));
      } else {
        // Chama API para usuários originais
        await apiService.updateUser(id, editForm);
      }
      
      setUsers(users.map(u => u.id === id ? { ...u, ...editForm } : u));
      setEditingUser(null);
    } catch (err) {
      alert('Erro ao atualizar usuário');
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Tem certeza que deseja excluir este usuário?')) {
      try {
        // Verifica se é usuário local ou da API
        const localUsers = JSON.parse(localStorage.getItem('newUsers') || '[]');
        const isLocalUser = localUsers.some(u => u.id === id);
        
        if (isLocalUser) {
          // Remove usuário local
          const updatedLocalUsers = localUsers.filter(u => u.id !== id);
          localStorage.setItem('newUsers', JSON.stringify(updatedLocalUsers));
        } else {
          // Chama API para usuários originais
          await apiService.deleteUser(id);
        }
        
        setUsers(users.filter(u => u.id !== id));
      } catch (err) {
        alert('Erro ao excluir usuário');
      }
    }
  };

  if (loading) return <div style={{textAlign: 'center', padding: '20px'}}>Carregando...</div>;
  if (error) return <div style={{textAlign: 'center', padding: '20px', color: 'red'}}>{error}</div>;
  return (
    <div style={{
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{
        color: '#333',
        textAlign: 'center',
        marginBottom: '30px'
      }}>Página Inicial</h1>
      
      <p style={{
        fontSize: '18px',
        textAlign: 'center',
        marginBottom: '40px',
        color: '#666'
      }}>Bem-vindo ao painel EcoWATT!</p>
      
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '30px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: '#333', margin: 0 }}>Usuários do Sistema</h2>
          <Link to="/adicionar" style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>+ Adicionar Usuário</Link>
        </div>
        <div style={{
          display: 'grid',
          gap: '15px'
        }}>
          {users.map(user => (
            <div key={user.id} style={{
              backgroundColor: 'white',
              padding: '15px',
              borderRadius: '6px',
              border: '1px solid #dee2e6'
            }}>
              {editingUser === user.id ? (
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <input
                    value={editForm.name}
                    onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                    style={{ padding: '8px', flex: 1, border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                  <input
                    value={editForm.email}
                    onChange={(e) => setEditForm({...editForm, email: e.target.value})}
                    style={{ padding: '8px', flex: 1, border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                  <button onClick={() => handleUpdate(user.id)} style={{ padding: '8px 12px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}>Salvar</button>
                  <button onClick={() => setEditingUser(null)} style={{ padding: '8px 12px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px' }}>Cancelar</button>
                </div>
              ) : (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ margin: '0 0 5px 0', color: '#333' }}>{user.name}</h3>
                    <p style={{ margin: '0', color: '#666', fontSize: '14px' }}>{user.email}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <Link to={`/perfil/${user.id}`} style={{ padding: '8px 12px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>Ver</Link>
                    <button onClick={() => handleEdit(user)} style={{ padding: '8px 12px', backgroundColor: '#ffc107', color: 'black', border: 'none', borderRadius: '4px' }}>Editar</button>
                    <button onClick={() => handleDelete(user.id)} style={{ padding: '8px 12px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px' }}>Excluir</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;