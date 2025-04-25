
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Banner from './Banner';
import Footer from './Footer';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match!');
      return;
    }

    try {
      const token = localStorage.getItem('token') || sessionStorage.getItem('token');

      const response = await fetch('http://localhost:5000/api/auth/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ oldPassword, newPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Password changed successfully!');
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        alert(data.message || 'Failed to change password.');
      }
    } catch (error) {
      alert('Error changing password.');
      console.error(error);
    }
  };

  return (
    <>
      <Banner />
      <div
        style={{
          ...styles.container,
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'center' : 'flex-start',
          padding: isMobile ? '16px' : '32px 40px',
        }}
      >
        <div
          style={{
            ...styles.sidebarContainer,
            marginRight: isMobile ? 0 : '100px',
            marginBottom: isMobile ? '20px' : 0,
            width: isMobile ? '100%' : '260px',
          }}
        >
          <Sidebar />
        </div>
        <div
          style={{
            ...styles.content,
            width: isMobile ? '100%' : '860px',
            padding: isMobile ? '20px' : '32px 40px',
          }}
        >
          <h2 style={{ ...styles.title, fontSize: isMobile ? '20px' : '24px' }}>
            Change Password
          </h2>
          <p style={styles.subtitle}>
            Here you can change your password. Please fill up the form below.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="Old Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              style={styles.input}
              required
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              style={styles.input}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>
              Save Change
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    backgroundColor: '#f5f9ff',
    boxSizing: 'border-box',
    justifyContent: 'center',
    gap: '24px',
    flexWrap: 'wrap',
  },
  sidebarContainer: {
    minWidth: '240px',
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.05)',
    fontFamily: 'Segoe UI, sans-serif',
  },
  title: {
    fontWeight: 600,
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '24px',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '12px',
    marginBottom: '18px',
    fontSize: '14px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    outline: 'none',
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#2d50ff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '15px',
  },
};

export default ChangePassword;
