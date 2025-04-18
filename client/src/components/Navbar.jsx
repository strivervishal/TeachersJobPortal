// src/components/Navbar.jsx
import React, { useState, useEffect, useRef, useContext } from 'react';
import { FaLock, FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);      // ← ADD THIS LINE
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useContext(AuthContext);

  const menus = {
    home: ['Home 1', 'Home 2', 'Home 3', 'Home 4'],
    pages: [
      'About Us', 'Job List', 'Job Details', 'Resume Page',
      'Privacy Policy', 'Faq', 'Our Pricing', '404 Error', 'Mail Success'
    ],
    candidates: ['Browse Jobs', 'Browse Categories', 'Add Resume', 'Job Alerts'],
    employers: ['Add Job', 'Manage Jobs', 'Manage Applications', 'Manage Resume', 'Browse Resumes'],
  };

  const isUnderlined = key => hoveredMenu === key || openMenu === key;

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setShowMobileNav(false);
      setOpenMenu(null);
      setHoveredMenu(null);
    }
  }, [isMobile]);

  useEffect(() => {
    const handleClickOutside = e => {
      if (showMobileNav && navRef.current && !navRef.current.contains(e.target)) {
        setShowMobileNav(false);
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showMobileNav]);

  const renderMenu = (key, label) => {
    const hasDropdown = Boolean(menus[key]);
    return (
      <li
        key={key}
        style={navItem}
        onMouseEnter={() => {
          setHoveredMenu(key);
          if (!isMobile && hasDropdown) setOpenMenu(key);
        }}
        onMouseLeave={() => {
          setHoveredMenu(null);
          if (!isMobile && hasDropdown) setOpenMenu(null);
        }}
        onClick={() => {
          if (isMobile && hasDropdown) {
            setOpenMenu(openMenu === key ? null : key);
          } else if (isMobile) {
            setShowMobileNav(false);
          }
        }}
      >
        <span style={{ ...linkBase, ...(isUnderlined(key) ? linkActive : {}) }}>{label}</span>

        {hasDropdown && openMenu === key && !isMobile && (
          <div style={dropdownStyle}>
            {menus[key].map((item, i) => {
              const id = `${key}-${i}`;
              return (
                <div
                  key={i}
                  style={{
                    ...dropdownItem,
                    ...(hoveredDropdown === id
                      ? { backgroundColor: '#2952FF', color: '#fff' }
                      : {})
                  }}
                  onMouseEnter={() => setHoveredDropdown(id)}      
                  onMouseLeave={() => setHoveredDropdown(null)}     
                  onClick={() => {
                    if (key === 'employers' && item === 'Manage Jobs') {
                      navigate('/manage-jobs');
                    }
                    if (key === 'employers' && item === 'Manage Applications') {
                      navigate('/manage-applications');
                    }
                    if (key === 'home' && item === 'Home 1') {
                      navigate('/');
                    }
                    if (item === 'Add Job') {
                      navigate('/add-job');
                    } 
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}

        {hasDropdown && openMenu === key && isMobile && (
          <div>
            {menus[key].map((item, i) => {
              const id = `${key}-${i}`;
              return (
                <div
                  key={i}
                  style={{
                    ...dropdownItem,
                    ...(hoveredDropdown === id
                      ? { backgroundColor: '#2952FF', color: '#fff' }
                      : {})
                  }}
                  onMouseEnter={() => setHoveredDropdown(id)}      
                  onMouseLeave={() => setHoveredDropdown(null)}     
                  onClick={() => {
                    setShowMobileNav(false);
                    if (key === 'employers' && item === 'Manage Jobs') {
                      navigate('/manage-jobs');
                    }
                    if (key === 'employers' && item === 'Manage Applications') {
                      navigate('/manage-applications');
                    }
                    if (key === 'home' && item === 'Home 1') {
                      navigate('/');
                    }
                    if (item === 'Add Job') {
                      navigate('/add-job');
                    } 
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </li>
    );
  };

  const navStyle = {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '0 1rem', height: '60px', backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', fontFamily: 'sans-serif', position: 'relative', zIndex: 1000,
  };
  const logoStyle = { display: 'flex', alignItems: 'center', fontSize: '1.25rem', fontWeight: '700' };
  const logoJob = { backgroundColor: '#2952FF', color: '#fff', padding: '0.4rem 0.75rem', clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' };
  const logoGrids = { backgroundColor: '#0A0E27', color: '#fff', padding: '0.4rem 0.75rem', clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' };
  const hamburgerStyle = { display: isMobile ? 'block' : 'none', fontSize: '1.5rem', cursor: 'pointer' };
  const navList = {
    display: isMobile ? (showMobileNav ? 'flex' : 'none') : 'flex',
    flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'stretch' : 'center',
    listStyle: 'none', margin: 0, padding: isMobile ? '1rem 0' : 0,
    position: isMobile ? 'absolute' : 'static', top: isMobile ? '60px' : 'auto',
    left: 0, width: isMobile ? '100%' : 'auto', backgroundColor: isMobile ? '#fff' : 'transparent',
    boxShadow: isMobile ? '0 2px 8px rgba(0,0,0,0.1)' : 'none', zIndex: 999,
  };
  const navItem = { position: 'relative', margin: isMobile ? '0.5rem 0' : '0 1rem', display: 'block' };
  const linkBase = { textDecoration: 'none', color: '#0A0E27', fontWeight: 500, padding: '0.5rem 1rem', display: 'inline-block', cursor: 'pointer', width: isMobile ? '100%' : 'auto' };
  const linkActive = { color: '#2952FF', borderBottom: '2px solid #2952FF' };
  const dropdownStyle = { position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#fff', borderRadius: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', overflow: 'hidden', zIndex: 200 };
  const dropdownItem = { padding: '0.5rem 1rem', whiteSpace: 'nowrap', color: '#333', cursor: 'pointer', width: '100%', boxSizing: 'border-box' };
  const authContainer = { display: isMobile ? 'none' : 'flex', alignItems: 'center' };
  const loginLink = { display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#0A0E27', fontWeight: 500, padding: isMobile ? '0.75rem 1rem' : 0, margin: isMobile ? 0 : '0 1.5rem 0 0', width: isMobile ? '100%' : 'auto', cursor: 'pointer' };
  const signupBtn = { backgroundColor: '#2952FF', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 500, fontSize: '0.9rem', width: isMobile ? 'calc(100% - 2rem)' : 'auto', margin: isMobile ? '0.5rem 1rem' : 0, textDecoration: 'none', display: 'inline-block', textAlign: 'center' };

  return (
    <nav style={navStyle} ref={navRef}>
      <div style={logoStyle}>
        <span style={logoJob}>Job</span>
        <span style={logoGrids}>Grids</span>
      </div>
      <div style={hamburgerStyle} onClick={() => setShowMobileNav(v => !v)}>
        {showMobileNav ? <FaTimes /> : <FaBars />}
      </div>
      <ul style={navList}>
        {renderMenu('home', 'Home')}
        {renderMenu('pages', 'Pages')}
        {renderMenu('candidates', 'Candidates')}
        {renderMenu('employers', 'Employers')}
        <li style={navItem} onMouseEnter={() => !isMobile && setHoveredMenu('contact')} onMouseLeave={() => !isMobile && setHoveredMenu(null)} onClick={() => isMobile && setShowMobileNav(false)}>
          <span style={{ ...linkBase, ...(isUnderlined('contact') ? linkActive : {}) }}>Contact</span>
        </li>
        {isMobile && showMobileNav && (
          <>
            {!isAuthenticated ? (
              <>
                <li style={navItem}><Link to="/login" style={loginLink} onClick={() => setShowMobileNav(false)}><FaLock style={{ marginRight: '0.5rem' }} /> Login</Link></li>
                <li style={navItem}><Link to="/signup" style={signupBtn} onClick={() => setShowMobileNav(false)}>Sign Up</Link></li>
              </>
            ) : (
              <li style={navItem}><button style={signupBtn} onClick={logout}>Logout</button></li>
            )}
          </>
        )}
      </ul>
      <div style={authContainer}>
        {!isAuthenticated ? (
          <>
            <Link to="/login" style={loginLink}><FaLock style={{ marginRight: '0.5rem' }} /> Login</Link>
            <Link to="/signup" style={signupBtn}>Sign Up</Link>
          </>
        ) : (
          <button style={signupBtn} onClick={logout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
