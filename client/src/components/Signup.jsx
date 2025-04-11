
import React, { useState } from 'react';
import axios from 'axios';
import { FaLinkedin, FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Signup = ({ onClose }) => {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm]   = useState('');
  const [agree, setAgree]       = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => {
    if (typeof onClose === 'function') onClose();
    else navigate(-1);
  };

  const handleLinkedInSignup = () => navigate('/auth/linkedin');
  const handleGoogleSignup   = () => navigate('/auth/google');
  const handleFacebookSignup = () => navigate('/auth/facebook');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!agree) {
      setError('You must agree to the Terms & Conditions.');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      const { data } = await axios.post(
        '/api/auth/signup',
        { email, password, confirm },
        { headers: { 'Content-Type': 'application/json' } }
      );

      localStorage.setItem('token', data.token);
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        navigate('/login');
      }, 2000);
    } catch (err) {
      const msg =
        err.response?.data?.message ||
        err.message ||
        'Signup failed';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const popupStyles = {
    overlay: {
      position: 'fixed',
      top: 0, left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.4)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2000,
    },
    modal: {
      backgroundColor: '#fff',
      padding: '24px',
      borderRadius: '8px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
      textAlign: 'center',
    },
    button: {
      marginTop: '16px',
      padding: '8px 16px',
      backgroundColor: '#2962ff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
  };

  const styles = {
    overlay: {
      position: 'fixed',
      top: 0, left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.4)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modal: {
      position: 'relative',
      width: '480px',
      maxWidth: '90%',
      backgroundColor: '#fff',
      borderRadius: '8px',
      padding: '32px',
      boxSizing: 'border-box',
      boxShadow: '0 4px 24px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif',
    },
    closeBtn: {
      position: 'absolute',
      top: '16px',
      right: '16px',
      background: 'transparent',
      border: 'none',
      fontSize: '28px',
      lineHeight: '1',
      padding: '4px',
      cursor: 'pointer',
    },
    title: {
      margin: 0,
      fontSize: '24px',
      fontWeight: '600',
      color: '#111',
    },
    underline: {
      width: '40px',
      height: '3px',
      backgroundColor: '#2962ff',
      margin: '8px 0 16px 0',
    },
    subtitle: {
      margin: '0 0 24px 0',
      fontSize: '14px',
      color: '#555',
    },
    socialBtn: {
      width: '100%',
      padding: '12px',
      border: 'none',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: '500',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      marginBottom: '12px',
    },
    linkedin: { backgroundColor: '#0077b5' },
    google:   { backgroundColor: '#db4437' },
    facebook: { backgroundColor: '#4267B2' },
    divider: {
      display: 'flex',
      alignItems: 'center',
      margin: '16px 0',
    },
    hr: {
      flex: 1,
      height: '1px',
      backgroundColor: '#ddd',
      border: 'none',
    },
    orText: {
      margin: '0 12px',
      fontSize: '12px',
      color: '#888',
    },
    formGroup: {
      marginBottom: '16px',
    },
    label: {
      display: 'block',
      marginBottom: '6px',
      fontSize: '14px',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '14px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      boxSizing: 'border-box',
    },
    checkboxRow: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '24px',
      fontSize: '14px',
    },
    checkboxLabel: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '14px',
      color: '#555',
    },
    checkbox: {
      marginRight: '8px',
    },
    link: {
      fontSize: '14px',
      color: '#2962ff',
      textDecoration: 'none',
    },
    signupBtn: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#2962ff',
      border: 'none',
      borderRadius: '4px',
      color: '#fff',
      fontSize: '16px',
      fontWeight: '500',
      marginBottom: '16px',
    },
    footer: {
      textAlign: 'center',
      fontSize: '14px',
      color: '#555',
    },
    errorText: {
      color: 'red',
      marginBottom: '16px',
      fontSize: '14px',
    },
  };

  return (
    <>
      <div style={styles.overlay}>
        <div style={styles.modal}>
          <button style={styles.closeBtn} onClick={handleClose}>×</button>

          <h2 style={styles.title}>Create a Free Account</h2>
          <div style={styles.underline}></div>
          <p style={styles.subtitle}>
            Sign up to start exploring and applying for jobs.
          </p>

          <button style={{ ...styles.socialBtn, ...styles.linkedin }} onClick={handleLinkedInSignup}>
            <FaLinkedin style={{ marginRight: '8px' }} /> Import From LinkedIn
          </button>
          <button style={{ ...styles.socialBtn, ...styles.google }} onClick={handleGoogleSignup}>
            <FaGoogle style={{ marginRight: '8px' }} /> Import From Google
          </button>
          <button style={{ ...styles.socialBtn, ...styles.facebook }} onClick={handleFacebookSignup}>
            <FaFacebook style={{ marginRight: '8px' }} /> Import From Facebook
          </button>

          <div style={styles.divider}>
            <hr style={styles.hr} />
            <span style={styles.orText}>Or</span>
            <hr style={styles.hr} />
          </div>

          {error && <div style={styles.errorText}>{error}</div>}

          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>E‑mail</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.checkboxRow}>
              <label style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={e => setAgree(e.target.checked)}
                  style={styles.checkbox}
                />
                I agree to the{' '}
                <Link to="/terms" style={styles.link}>
                  Terms &amp; Conditions
                </Link>
              </label>
            </div>

            <button
              type="submit"
              style={{
                ...styles.signupBtn,
                cursor: agree && !loading ? 'pointer' : 'not-allowed',
                opacity: agree && !loading ? 1 : 0.6
              }}
              disabled={!agree || loading}
            >
              {loading ? 'Signing Up…' : 'Sign Up'}
            </button>
          </form>

          <div style={styles.footer}>
            Already have an account?{' '}
            <Link to="/login" style={styles.link}>
              Log In
            </Link>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div style={popupStyles.overlay}>
          <div style={popupStyles.modal}>
            <h3>✅ Signup Successful</h3>
            <p>Redirecting to Home…</p>
            <button style={popupStyles.button} onClick={() => navigate('/')}>
              Go Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
