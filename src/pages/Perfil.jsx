

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { apiService } from '../services/api';

const Perfil = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await apiService.getUserById(userId);
        setUser(data);
      } catch (err) {
        setError('Usuário não encontrado!');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [userId]);

  if (loading) return <div style={{textAlign: 'center', padding: '20px'}}>Carregando...</div>;
  if (error) return <div style={{textAlign: 'center', padding: '20px', color: '#dc3545'}}><h1>{error}</h1></div>;

  // Renderiza apenas as informações do usuário encontrado
  return (
    <div style={{
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h1 style={{
        color: '#333',
        textAlign: 'center',
        marginBottom: '30px'
      }}>Perfil de {user.name}</h1>
      
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '30px',
        borderRadius: '8px',
        border: '1px solid #dee2e6'
      }}>
        <div style={{
          display: 'grid',
          gap: '15px'
        }}>
          <div style={{
            padding: '15px',
            backgroundColor: 'white',
            borderRadius: '6px',
            border: '1px solid #e9ecef'
          }}>
            <strong style={{ color: '#495057' }}>ID:</strong>
            <span style={{ marginLeft: '10px', color: '#6c757d' }}>{user.id}</span>
          </div>
          
          <div style={{
            padding: '15px',
            backgroundColor: 'white',
            borderRadius: '6px',
            border: '1px solid #e9ecef'
          }}>
            <strong style={{ color: '#495057' }}>Email:</strong>
            <span style={{ marginLeft: '10px', color: '#6c757d' }}>{user.email}</span>
          </div>
          
          <div style={{
            padding: '15px',
            backgroundColor: 'white',
            borderRadius: '6px',
            border: '1px solid #e9ecef'
          }}>
            <strong style={{ color: '#495057' }}>Telefone:</strong>
            <span style={{ marginLeft: '10px', color: '#6c757d' }}>{user.phone}</span>
          </div>
          
          <div style={{
            padding: '15px',
            backgroundColor: 'white',
            borderRadius: '6px',
            border: '1px solid #e9ecef'
          }}>
            <strong style={{ color: '#495057' }}>Website:</strong>
            <span style={{ marginLeft: '10px', color: '#6c757d' }}>{user.website}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;