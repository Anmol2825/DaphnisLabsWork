import React from 'react'
import './Sidebar.css'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";

function Sidebar() {
    return (
        <div className="sidebar">
            <hr />
            <div className="center">
                <ul>
                    <p className="title" style={{
                      backgroundColor:"rgb(200, 190, 190)",
                      color:"black",
                      fontSize:"15px",
                      textAlign:"center",
                      height:"18px",
                      marginLeft:"5px",
                      marginRight:"5px"
                    }}>Related Category</p>
                    <li>
                        <DashboardIcon className="icon"  />
                        <span>Paracetamol Tablets</span>
                    </li>
                   
                 
                        <li>
                            <PersonOutlineIcon className="icon" />
                            <span> Paracetamol Syrup</span>
                        </li>
    
                   
                        <li>
                            <StoreIcon className="icon" />
                            <span>Paracetamol Powder</span>
                        </li>
                        <li>
                            
                            <span style={{
                          backgroundColor:"teal",
                          color:"white",
                          borderRadius:"2px",
                          width:"100%",
                          paddingLeft:"10px"
                        }}>Aceclofenac &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp; x </span>
                        </li>
          
                    <li>
                        {/* <CreditCardIcon className="icon" /> */}
                        <span style={{
                          paddingLeft:"5px"
                        }}>Magaladrate Simethicone Oral Suspension</span>
                    </li>
                    <li>
                        {/* <LocalShippingIcon className="icon" /> */}
                        <span style={{
                          paddingLeft:"5px"
                        }}>Mefenamic Paracetamol Syrup</span>
                    </li>
                    <p className="title" style={{
                      backgroundColor:"rgb(200, 190, 190)",
                      color:"black",
                      fontSize:"15px",
                      textAlign:"center",
                      height:"18px",
                      marginLeft:"5px",
                      marginRight:"5px"
                    }}>Related Brands</p>
                    <li>
                        <InsertChartIcon className="icon" />
                        <span>Cipmol Paracetamol</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon" />
                        <span>Pandal Paracetamol Tablets</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon" />
                        <span>Combiflam</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon" />
                        <span>Crocin Tablets</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon" />
                        <span>Calpol Paracetamol Tablets</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon" />
                        <span>Sumo Tablets</span>
                    </li>
                    <p className="title" style={{
                      backgroundColor:"rgb(200, 190, 190)",
                      color:"black",
                      fontSize:"15px",
                      textAlign:"center",
                      height:"18px",
                      marginLeft:"5px",
                      marginRight:"5px"
                    }}>Business Type</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon" />
                        <span>Wholesaler</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span>Manufacturer</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon" />
                        <span>Retailer</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon" />
                        <span>Exporter</span>
                    </li>
                    <p className="title" style={{
                      backgroundColor:"rgb(200, 190, 190)",
                      color:"black",
                      fontSize:"15px",
                      textAlign:"center",
                      height:"18px",
                      marginLeft:"5px",
                      marginRight:"5px"
                    }}> Strength</p>
                    <li>
                        {/* <AccountCircleOutlinedIcon className="icon" /> */}
                        <span style={{
                          backgroundColor:"teal",
                          color:"white",
                          borderRadius:"2px",
                          width:"100%",
                          paddingLeft:"10px"
                        }}>500mg &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x</span>
                    </li>
                    <li>
                        {/* <ExitToAppIcon className="icon" /> */}
                        <span style={{
                          paddingLeft:"5px"
                        }}>600mg</span>
                    </li>
                    <p className="title" style={{
                      backgroundColor:"rgb(200, 190, 190)",
                      color:"black",
                      fontSize:"15px",
                      textAlign:"center",
                      height:"18px",
                      marginLeft:"5px",
                      marginRight:"5px"
                    }}> Manufacturer</p>
                    <li>
                        {/* <AccountCircleOutlinedIcon className="icon" /> */}
                        <span>Intas Pharmaceutical Ltd.</span>
                    </li>
                    <li>
               
                        <span>Alkem Laboratories Ltd.</span>
                    </li>
                    <p className="title" style={{
                      backgroundColor:"rgb(200, 190, 190)",
                      color:"black",
                      fontSize:"15px",
                      textAlign:"center",
                      height:"35px",
                      marginLeft:"5px",
                      marginRight:"5px"
                    }}>Prescription /Non prescription</p>
                  
                    <li>
                       
                        <span >Intas Pharmaceutical Ltd.</span>
                    </li>
                    <li>
                       
                        <span>Alkem Laboratories Ltd.</span>
                    </li>
                  
                </ul>
            </div>
            
        </div>
    )
}

export default Sidebar