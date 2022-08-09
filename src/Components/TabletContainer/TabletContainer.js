import React from 'react'
import TabletCard from '../TabletCard/TabletCard'
import './TabletContainer.css'
function TabletContainer() {
  return (
    <div className='tablet_container_main' style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-between",
        alignItems:"flex-start",
        marginLeft:"10px",
        marginTop:"-40px",
        width: "80%"

    }}>
        <TabletCard/>
        <TabletCard/>
        <TabletCard/>
        <TabletCard/>
        <TabletCard/>
        <TabletCard/>
        
    </div>
  )
}

export default TabletContainer