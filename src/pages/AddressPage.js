
import { useNavigate, } from "react-router-dom";
import { useParams } from "react-router-dom";
import { addresses } from "../helpers/AddressPageList";
import { Grid, List } from "@mui/joy"
import { Typography } from "@mui/material";
import GoogleMapReact from "google-map-react";
import './style.css';
import { useState } from "react";

const AddressPage = () => {
    const navigate = useNavigate()
    const { id } = useParams();
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const selectedAddress = addresses.find(address => address.id === parseInt(id))
    
    const handleChoose = () => {
        navigate("/basket")
        console.log("handleChoose")
      }

    const map = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };


      if (!selectedAddress) {
        return <div>Адрес не найден</div>; 
    }

    return (
        <>
        <div className="map">
        <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2, textAlign:'center' }} variant="h6" component="div">
            Пункт выдачи
        </Typography>
        <div className="map-blocks">
            <span>{selectedAddress.street}</span>
            <img src={selectedAddress.img}></img>
            <p>{selectedAddress.time}</p>
            <button onClick={handleChoose}>Выбрать</button>
            <li></li>
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

        </>
    )
}
 
export default AddressPage;