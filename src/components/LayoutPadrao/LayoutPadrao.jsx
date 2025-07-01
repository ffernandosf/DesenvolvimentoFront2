import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const LayoutPadrao = () => {
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
            <Link 
              to="/" 
              style={{
                color: 'white',
                textDecoration: 'none',
                padding: '8px 12px',
                borderRadius: '4px',
                backgroundColor: 'rgba(255,255,255,0.1)'
              }}
            >
              Sair
            </Link>
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