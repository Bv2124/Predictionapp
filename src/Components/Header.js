import EmailIcon from '@mui/icons-material/Email';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import {ReactComponent as Logo} from '../images/logo.svg'
import PES from '../images/PES.png'
import './Header.css'
 export default function Header(){
   return(
    <div className='H'>
<div className="H1">
    <div className="Header_content">
    <div className="Header_content_left col-lg-12 align-self-center md-center-item">
      <div className="ts-top-nav MLR  ">
        <div className='Mail col-lg-4 col-md-12 col-sm-12 col-xs-12'>
          <a href="mailto:info.psychologos@gmail.com">
            <EmailIcon /> info.psychologos@gmail.com
          </a>
        </div>
        <div className='Login col-md-6 col-lg-8 align-self-center md-center-item'>
          <a href='/Login'>
            <AccountCircleRoundedIcon /> 
            Login
            </a>
          <a href='/Login'>
            <AccountCircleRoundedIcon /> 
            Register
            </a>
            <div className='header_SocialMedia'>
            <a href='https://www.facebook.com/psychologsmagazine/'>
              <FacebookSharpIcon />
            </a>
            <a href='https://twitter.com/PsychologsIndia'>
              <TwitterIcon />
            </a>
            <a href='https://www.youtube.com/channel/UCe7MqnsLa0CtG1tcXBQf1KA'>
              <YouTubeIcon />
            </a>
            <a href='https://www.instagram.com/psychologsmagazine/'>
              <InstagramIcon />
            </a>
            <a href='https://www.telegram.com/psychologsmagazine/'>
              <TelegramIcon />
            </a>
            </div>
            <div className='Contact'>
            <button>Contact Us</button>
            </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    <div className='H2'>
    <div className="row Header_content">
    <div className=" align-self-center md-center-item H22">
    <div className="ts-top-nav">
      <div className='Logo col-md-2 col-lg-2'><Logo className="Logoimg col-md-2 col-lg-2"/></div>
      <div className='loader col-md-2 col-lg-4'><p></p></div>
      <div className='Ad col-md-12 col-lg-6'>
      <img src={PES} alt='PES University' className='PES'></img>
      <span className='Peace'><br></br>Study B.Sc in Psychology @ PES</span>
      <button type={"button"} className="LearnMore">APPLY NOW</button>
      </div>
    </div>
    </div>
    </div>
      </div>
      </div> 
   )
}