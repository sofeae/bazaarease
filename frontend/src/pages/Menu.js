import { useEffect } from 'react';
import { useMenusContext } from '../hooks/useMenusContext';
import { useAuthContext } from '../hooks/useAuthContext';

// components
import MenuDetails from '../components/MenuDetails';
import MenuForm from '../components/MenuForm';
import Sidebar from '../components/Sidebar';

const Menu = () => {
  const { menus, dispatch } = useMenusContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchMenus = async () => {
      const response = await fetch('/api/menus', {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_MENUS', payload: json });
      }
    };

    if (user) {
      fetchMenus();
    }
  }, [dispatch, user]);

  return (
    <div className="menu-container">
      
      <div style={{ display: 'flex' }}>
          <Sidebar className="sidebar" /> {/* Apply the "sidebar" class to the Sidebar */}
      <div className="menu">
        <div className="menus">
          {menus &&
            menus.map((menu) => (
              <MenuDetails key={menu._id} menu={menu} />
            ))}
        </div>
        <MenuForm />
      </div>
    </div>
    </div>
  );
};

export default Menu;
