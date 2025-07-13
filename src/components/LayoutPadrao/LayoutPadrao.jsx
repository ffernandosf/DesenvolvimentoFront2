import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { authService } from '../../services/api';

const LayoutPadrao = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.removeToken();
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div>
      <nav style={{
        backgroundColor: '#343a40',
        padding: '15px 20px',
        marginBottom: '20px'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{ color: 'white', margin: 0 }}>Luz Control</h2>
          <div>
            <Link 
              to="/home" 
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '20px',
                padding: '8px 12px',
                borderRadius: '4px',
                backgroundColor: 'rgba(255,255,255,0.1)'
              }}
            >
              Home
            </Link>
            <button 
              onClick={handleLogout}
              style={{
                color: 'white',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: 'none',
                padding: '8px 12px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Sair
            </button>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutPadrao;