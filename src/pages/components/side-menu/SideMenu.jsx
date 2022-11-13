import React from "react";
// import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareIcon from '@mui/icons-material/Share';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import "./SideMenu.css"

let iconCSS = {
    cursor: 'pointer',
    fontSize: '40px'
  }

const SideMenu = () => {
    return (
        <div id="menu-lateral">
          <div>
              <ShoppingCartOutlinedIcon color="action" className="icons-side-menu" sx={iconCSS} />
              <FavoriteBorderOutlinedIcon  color="action" className="icons-side-menu" sx={iconCSS} />
              <ShareIcon color="action" className="icons-side-menu" sx={iconCSS} />
              <Person2OutlinedIcon color="action" className="icons-side-menu" sx={iconCSS} />
              <LogoutOutlinedIcon color="action" className="icons-side-menu" sx={iconCSS} />
          </div>
      </div>

    )
      
}

export default SideMenu