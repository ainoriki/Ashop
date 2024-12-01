
import { Grid, List } from "@mui/joy"
import { Typography } from "@mui/material";
import { addresses } from "../helpers/AddressPageList";
import './style.css'
import GoogleMapReact from "google-map-react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const MapChoosePage = () => {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const navigate = useNavigate()

    const handleAddress = (id) => {
        navigate(`/map/${id}`)
        console.log("handleaddress") 
    }

    const map = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };

      
    return ( 
        <div className="map">

            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <Typography sx={{ mt: 4, mb: 2}} variant="h6" component="div">
                Выберите способ доставки
            </Typography>
            <div className="map-blocks">
                <ul className="map-block-list">
                    {addresses.map(address => (
                        <button onClick={() => handleAddress(address.id)}><li className="list-li">{address.street}</li></button>
                    ))}
                </ul>
            </div>
            </Grid>
            </Grid>

            <div style={{ height: '100vh', width: '800px'}}>
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={map.center}
                    defaultZoom={map.zoom}
                    >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                    </GoogleMapReact>
                    </div>
        </div>

        

      
       
     );
}
 
export default MapChoosePage;