import React from 'react'
import Header from '../Components/Header/Header'
import NavBar from '../Components/Navbar/NavBar'
import Sidebar from '../Components/Sidebar/Sidebar'
import TabletContainer from '../Components/TabletContainer/TabletContainer'

function Main() {
  return (
    <div>
      <NavBar />
      <Header />
      <div
        style={{
          display: "flex",

        }}>
        <Sidebar />
        <TabletContainer />
      </div>

    </div>
  )
}

export default Main