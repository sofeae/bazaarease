import { useNavigate } from 'react-router-dom';

import { useMenusContext } from '../hooks/useMenusContext';
import { useAuthContext } from '../hooks/useAuthContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const MenuDetails = ({ menu }) => {
  const { dispatch } = useMenusContext();
  const { user } = useAuthContext();
  const navigate = useNavigate(); // Get the navigate function
  
  const handleEdit = async () => {
    if (!user) {
      return;
    }

    const response = await fetch('/api/menus/' + menu._id, {
      method: 'UPDATE',
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'UPDATE_MENUS', payload: json });

       // Redirect to the Cart page when the cart icon is clicked
      navigate('/pages/Cart.js');
    }
  };

  const iconStyle = {
    marginRight: '8px', // Adjust the spacing between the icon and text
    cursor: 'pointer', // Add a pointer cursor to indicate interactivity
  };

  return (
    <div className="menus-details">
      <h4>{menu.name}</h4>
      <p>
        <strong>Description: </strong>
        {menu.desc}
      </p>
      <p>
        <strong>Price (in RM): </strong>
        {menu.price}
      </p>
      <p>
        <img src={'http://localhost:4000/' + menu.image} height="100" width="150" alt="Menu" />
      </p>
      <p>{formatDistanceToNow(new Date(menu.createdAt), { addSuffix: true })}</p>
      <span>
        {/* Cart icon */}
        <ShoppingCartIcon style={iconStyle} onClick={handleEdit} />
      </span>
    </div>
  );
}; 

export default MenuDetails; 
