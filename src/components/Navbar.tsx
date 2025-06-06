// components/Navbar.tsx
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LogoutModal from './LogoutModal';

interface NavbarProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLandingPage = location.pathname === '/';

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    onLogout();
    navigate('/');
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      {isLandingPage && !isLoggedIn ? (
        <div className="text-center text-xl font-bold">SimpleBlog</div>
      ) : (
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">
            <Link to="/blogs">SimpleBlog</Link>
          </div>
          <div>
            {isLoggedIn ? (
              <button
                onClick={handleLogoutClick}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Logout
              </button>
            ) : (
              // Removed the Login and Register links, so show nothing here for not logged in
              null
            )}
          </div>
        </div>
      )}

      {/* Logout confirmation modal */}
      <LogoutModal
        isOpen={showLogoutModal}
        onConfirm={confirmLogout}
        onCancel={() => setShowLogoutModal(false)}
      />
    </nav>
  );
};

export default Navbar;
