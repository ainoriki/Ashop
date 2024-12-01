
import { div } from 'framer-motion/client';
import acc from '.././images/icons/acc-user.png'
// import Card from '@mui/joy/Card';
import './style.css';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemButton from '@mui/joy/ListItemButton';
import { useNavigate } from 'react-router-dom';
// import Home from '@mui/icons-material/Home';
// import Apps from '@mui/icons-material/Apps';



const Account = () => {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/moreAccount')
  }
    return ( 
        <>

        <div className='account-block'>


     
        <List sx={{ maxWidth: 320 }}>
        <ListItem>
          <ListItemButton selected>
            <ListItemDecorator>
              {/* <Home /> */}
            </ListItemDecorator>
            Home
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemDecorator>
              {/* <Apps /> */}
            </ListItemDecorator>
            Apps
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemDecorator />
            Settings
          </ListItemButton>
        </ListItem>
      </List>



        <div classNameName="card mb-3" style={{maxWidth:'540px;'}}>
            <div className="row g-0  account-card">
                <div className="col-md-4">
                    <img src={acc} className="img-fluid rounded-start account-image" alt="..." />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">Ainoriki</h5>
                    <p className="card-text">me me me me me me me me</p>
                    <button type="button" onClick={handleClick} className="btn btn-light">More</button>
                </div>
                </div>
            </div>
        </div>
        </div>
        </>
     );
}
 
export default Account;