import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../styles/Footer.css'


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
        <InstagramIcon/> <FacebookIcon/> <LocalPhoneIcon/> <LocationOnIcon/> 
        </div>
        <p> &copy; 2022 tiquiciarestaurant.com</p>
    </div>
  )
}

export default Footer