import { Alert, Button } from 'antd'
import { observer } from 'mobx-react-lite'
import React, {useState} from 'react'
import menuItemStore from '../mobx/MenuItemStore'


export default function denemetahtasi() {
    
  return (
    <div>
        <Button onClick={()=>menuItemStore.setSelectedMenuItemId(2)} className="bg-white m-10">tıkla</Button>
        <h1>{menuItemStore.selectedMenuItemId}</h1>
    </div>
  )
}
