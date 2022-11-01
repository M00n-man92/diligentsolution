import React, { useEffect, useState } from 'react'
import Axios from "axios"
import "./nine.scss";

import {
  TelegramShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";


import { Phone, Email, LocationOn, Telegram, Link, WhatsApp } from '@mui/icons-material';
import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import CircularProgress from "@mui/material/CircularProgress";
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

import { useQuery, useMutation } from "react-query";
export default function Nine() {
  /// first form
  const [age, setAge] = useState('');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //second form
  const [commodity, setCommodity] = useState("");
  const [otherAge, setOtherAge] = useState("");
  const [quality, setQuality] = useState(0);
  const [volume, setVolume] = useState(0);
  const [unit, setUnit] = useState("");
  const [price, setPrice] = useState(0);
  const [destination, setDestination] = useState("")
  const [reuirment, setRequirment] = useState("");
  const [period, setPeriod] = useState("")

  // handeler variables
  const [success, setSuccess] = useState(false)
  const [know, setKnow] = useState("")
  const [error, setErrors] = useState(false)

  //var to change the forms
  const [change, setChange] = useState(true);
  const [color, setColor] = useState("red");
  const send = async (user) => {
    // const reply = await Axios.post("https://jazzythings.herokuapp.com/api/user/coffee", user);
    const reply = await Axios.post("http://localhost:5000/api/user/coffee", user);

    return reply.data;
  };
  const anotherSend = async (user) => {
    const reply = await Axios.post("https://jazzythings.herokuapp.com/api/user/coffee", user);
    return reply.data

  }
  const { mutate, isLoading, isError, isIdle } = useMutation(send, {
    onSuccess: (data) => {
      setSuccess(true);
      setErrors(false)
      console.log(data);
      setKnow("Message is sent successfully. We'll get back to you soon.");
      setColor("green");
    },
    onError: (e) => {
      setErrors(true);
      setKnow(e.response.data.error.message);
      console.log(e);
    },
  });
  useEffect(()=>{},[know])
  // this is for the inquires form
  const anotherHandleChange = (e) => {
    e.preventDefault();
    const user = {
      commodity,
      otherAge,
      quality,
      volume,
      unit,
      price,
      destination,
      reuirment,
      period,
    };
    if (commodity.length > 1 && otherAge.length) {
      mutate(user);
    } else {
      setErrors(true);
      setKnow("please make sure you've correctly filled the boxes'");
    }
  }
  // this is or the contact form
  const handleChange = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setErrors(false);
    setKnow("");
    setColor("");
    const user = { name, email, message, age };
    if (name.length > 1 && email.length > 1 && message.length > 1) {
      mutate(user);
    } else {
      setErrors(true);
      setColor("red")
      setKnow("please make sure you've correctly filled the boxes'");
    }
  };
  
  return (
    <div className='nine' id="contact us">
      <div className="first">
        <div className="wahid">
          <h2>
            Contact us
          </h2>
          <div className="newone">
            <div className="iconsline">
              <WhatsappShareButton url={window.location.href} title="Diligent solutions" >
                <WhatsApp className="socialicons" />
              </WhatsappShareButton>
            </div>
            <div className="iconsline">
              <WorkplaceShareButton url={window.location.href} title="Diligent solutions" >
                <Link className="socialicons" />

              </WorkplaceShareButton>
            </div>
            <div className="iconsline">
              <TelegramShareButton url={window.location.href} title="Diligent solutions">
                <Telegram className="socialicons" />
              </TelegramShareButton>
            </div>

          </div>

        </div>
        <div className="duos">
          <div className="estenen">
            <div className="image">
              <Phone />
            </div>
            <span>+251 97 508 1993</span>
          </div>
          <div className="estenen">
            <div className="image">
              <Email />
            </div>
            <span>contact@diligentts.com</span>
          </div>
          <div className="estenen">
            <div className="image">
              <LocationOn />
            </div>
            <span>Bole, Addis Ababa, Ethiopia</span>
          </div>


        </div>


      </div>
      
        {change ?

          <div className="second">
            <div className="postiton">
              <Button
                className="button"
                onClick={() => setChange(!change)}>
                {change ? <span>Submit Request 2/2</span> : <span>Contact 1/2</span>}
              </Button>
            </div>
            <div className="one">

              <TextField className='texting' label="Name"
                onChange={(e) => setName(e.target.value)}
                fullWidth
                type="text"
                required />
            </div>
            <div className="one">

              <TextField
                className='texting' label="Mail"
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                type="email"
                required
              />
            </div>
            <div className="one">

              <Box className="texting">
                <FormControl fullWidth>
                  <InputLabel >Coffee Profile</InputLabel>
                  <Select

                    value={age}
                    label="Coffee Profile"
                    onChange={(e) => setAge(e.target.value)}
                    required
                  >
                    <MenuItem value="Djimmah">Djimmah</MenuItem>
                    <MenuItem value="Hrrar">Hrrar</MenuItem>
                    <MenuItem value="Limu">Limu</MenuItem>
                    <MenuItem value="Teppi">Teppi</MenuItem>
                    <MenuItem value="Gujji">Gujji</MenuItem>
                    <MenuItem value="Lekmpti">Lekmpti</MenuItem>
                    <MenuItem value="Sidamo">Sidamo</MenuItem>
                    <MenuItem value="Yirgacheffee">Yirgacheffee</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="one">


              <TextField
                className='texting' label="Message"
                onChange={(e) => setMessage(e.target.value)}
                fullWidth
                type="text"
                multiline
                rows={5}
                required
              />
            </div>
            <div className="two">
              <Button
                onClick={(e) => handleChange(e)}
                type="submit"
                disabled={isLoading}
                startIcon={isLoading ? <CircularProgress color="inherit" size={25} /> : null}
              > Send</Button>
              {error ? <span style={{ color: color, marginLeft: 40 }}> {know}</span> : <span style={{ color: color, marginLeft: 40 }}>{know}</span>}
            </div>

          </div>

          :

          <div className="second">
            <div className="postiton">
              <Button
                className="button"
                onClick={() => setChange(!change)}>
                {change ? <span>Submit Request 2/2</span> : <span>Contact 1/2</span>}
              </Button>
            </div>
            <div className="one">

              <Box className="texting">
                <FormControl fullWidth>
                  <InputLabel >Commodity</InputLabel>
                  <Select

                    value={commodity}
                    label="Coffee Profile"
                    onChange={(e) => setCommodity(e.target.value)}
                    required
                  >
                    <MenuItem value="Green">Green</MenuItem>
                    <MenuItem value="Roasted">Roasted</MenuItem>

                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="one">

              <Box className="texting">
                <FormControl fullWidth>
                  <InputLabel >Origin</InputLabel>
                  <Select

                    value={otherAge}
                    label="Coffee Profile"
                    onChange={(e) => setOtherAge(e.target.value)}
                    required
                  >
                    <MenuItem value="Djimmah">Djimmah</MenuItem>
                    <MenuItem value="Hrrar">Hrrar</MenuItem>
                    <MenuItem value="Limu">Limu</MenuItem>
                    <MenuItem value="Teppi">Teppi</MenuItem>
                    <MenuItem value="Gujji">Gujji</MenuItem>
                    <MenuItem value="Lekmpti">Lekmpti</MenuItem>
                    <MenuItem value="Sidamo">Sidamo</MenuItem>
                    <MenuItem value="Yirgacheffee">Yirgacheffee</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="one">

              <Box className="texting">
                <FormControl fullWidth>
                  <InputLabel >Quality/Grade</InputLabel>
                  <Select

                    value={quality}
                    label="Coffee Profile"
                    onChange={(e) => setQuality(e.target.value)}
                    required
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>

                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="one">

              <TextField className='textingg' label="Volume"
                onChange={(e) => setVolume(e.target.value)}
                value={volume}
                fullWidth
                type="number"
                required />
              <TextField className='textingg' label="Unit"
                onChange={(e) => setUnit(e.target.value)}
                value={unit}
                fullWidth
                type="text"
                required />
            </div>

            <div className="one">
              <TextField
                className='texting' label="Target Price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                fullWidth
                type="number"
              />
            </div>
            <div className="one">
              <TextField
                className='texting' label="Destination"
                onChange={(e) => setDestination(e.target.value)}
                value={destination}
                fullWidth
                type="text"
              />
            </div>
            <div className="one">
              <TextField
                id="date"
                label="Prefered Shipment Period"
                type="date"
                defaultValue="2022-10-21"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setPeriod(e.target.value)}
                value={period}
              />
            </div>
            <div className="one">
              <TextField
                label="Additional Requriments"
                type="text"
                onChange={(e) => setRequirment(e.target.value)}
                value={reuirment}
              />
            </div>
            <div className="two">
              <Button
                onClick={(e) => console.log(message,email,name)}
                type="submit"
                disabled={isLoading}
                startIcon={isLoading ? <CircularProgress color="inherit" size={25} /> : null}
              > Send</Button>
              {error ? <span style={{ color: color, marginLeft: 40 }}> {know}</span> : <span></span>}
            </div>

          </div>
        }
      


      {/* second form  */}


    </div>
  )
}
