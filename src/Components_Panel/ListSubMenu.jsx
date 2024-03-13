import React from 'react'
import SubMenu from './SubMenu'

function ListSubMenu({submenus}) {
    return (
        <div>
          {" "}
          <div className="grid gap-4 grid-cols-2">
            {submenus.map((submenu) => (
              <SubMenu key={submenu.id} submenu={submenu} />
            ))}
          </div> 
        </div>
  )
}

export default ListSubMenu