// src/components/SignOut.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SignOut = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();           // Clear token and update auth state
    navigate('/');      // ✅ Redirect to Home instead of /login
  }, [logout, navigate]);

  return null;
};

export default SignOut;
