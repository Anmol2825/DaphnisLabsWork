import React from 'react'
import './TabletCard.css'
import hello from './hello.webp'
import TelegramIcon from '@mui/icons-material/Telegram';
function TabletCard() {
  return (
    <div id="card_container">
      <div id="card-image">
        <img src={hello} id="daq_blog_image" style={{
          cursor: "pointer",
        }} />
      </div>
      <div id="card-title">
        Favipiravir 400mg (Fabiflu) Tablets
        <br />
        <p style={{
          color: "brown"
        }}>Rs 1,775 <span style={{
          color: "gray"
        }}>/stripe</span></p>
        <br />
        Glenmark Pharmaceutical Limited

        <p style={{
          color: "gray",
          fontSize: "12px"
        }}>
          PARVAT PATIYA,SURAT,GUJRAT
        </p>
      </div>

      <div id="card-actions" style={{
        color: "teal",
        cursor: "pointer",
      }}>
        <TelegramIcon style={{
          color: "teal"
        }} />
        <h4>Contact Supplier</h4>

      </div>
      <div id="card-line" style={{
        backgroundColor: "brown",
        height: "50px",

        borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "5px"
      }}>



      </div>
    </div>
  )
}

export default TabletCard
