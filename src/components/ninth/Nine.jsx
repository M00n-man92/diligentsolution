import React, { useState } from 'react'
import Axios from "axios"
import "./nine.scss";

import { Phone, Email, LocationOn, Telegram, WhatsApp } from '@mui/icons-material';
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import CircularProgress from "@mui/material/CircularProgress";
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

import { useMutation } from "react-query";
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
  const [processing, setProcessing] = useState("")
  const [anotherUnit, setAnotherUnit] = useState("")
  const [unit, setUnit] = useState("");
  const [price, setPrice] = useState(0);
  const [destination, setDestination] = useState("")
  const [reuirment, setRequirment] = useState("");
  const [period, setPeriod] = useState("")

  // handeler variables
  const [know, setKnow] = useState("")
  const [error, setErrors] = useState(false)

  //var to change the forms
  const [change, setChange] = useState(false);
  const [color, setColor] = useState("red");
  const send = async (user) => {
    let reply
    if (change) {
      reply = await Axios.post("https://jazzythings.herokuapp.com/api/user/coffee", user);
    }
    else {
      reply = await Axios.post("https://jazzythings.herokuapp.com/api/user/anothercoffee", user);
    }

    // const reply = await Axios.post("http://localhost:5000/api/user/coffee", user);

    return reply.data;
  };

  const { mutate, isLoading } = useMutation(send, {
    onSuccess: (data) => {
      setErrors(false)
      console.log(data);
      setKnow(data.msg);
      setColor("green");
    },
    onError: (e) => {
      setErrors(true);
      setKnow(e.response.data.error.message);
      console.log(e);
    },
  });

  // this is for the inquires form

  // this is or the contact form
  const handleChange = async (e) => {
    e.preventDefault();
    setErrors(false);
    setKnow("");
    setColor("");
    if (change) {
      const user = { name, email, message, age };
      if (name.length > 1 && email.length > 1 && message.length > 1) {
        mutate(user);
      } else {
        setErrors(true);
        setColor("red")
        setKnow("please make sure you've correctly filled the boxes'");
      }
    }
    else if (!change) {
      const user = {
        name,
        commodity,
        otherAge,
        quality,
        volume,
        unit,
        price,
        destination,
        reuirment,
        period
      };
      if (name.length > 1) {
        mutate(user);
      } else {
        setErrors(true);
        setColor("red")
        setKnow("please make sure you've given us your company name'");
      }
    }
  };

  return (
    <div className='nine' id="contact us">
      <div className="first">
        <div className="wahid">
          <h2>
            Contact us
          </h2>

        </div>
        <div className="duos">
          <div className="estenen">
            <div className="image">
              <Phone />
            </div>
            <span>+251 97 508 1993</span>
          </div>
          <div className="newone">
            <div className="iconsline">
              <a href="/">
                <WhatsApp className="socialicons" />
              </a>
            </div>
            <div className="iconsline">
              <a href="/">
                <img src="./assets/clipart729602.png" alt="" />
              </a>
            </div>
            <div className="iconsline">
              <a href="/">
                <img src="./assets/clipart872578.png" alt="" />
              </a>
            </div>
            <div className="iconsline">
              <a href="/">
                <Telegram className="socialicons" />
              </a>
            </div>

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

        <div className="gps">
          <img src="./assets/gps.PNG" alt="" />
        </div>

      </div>

      {change ?

        <div className="second">
          <div className="postiton">

            <Button

              style={{ backgroundColor: "#4A2C2A" }}
              className="button"
              onClick={() => setChange(!change)}>
              Contact Us
            </Button>
            <Button
              className="button"
              onClick={() => setChange(!change)}>
              Submit Request
            </Button>
          </div>
          <div className="one">

            <TextField className='texting' label="Company Name"
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
                <InputLabel >Coffee Origin</InputLabel>
                <Select

                  value={age}
                  label="Coffee Profile"
                  onChange={(e) => setAge(e.target.value)}
                  required
                >
                  <MenuItem value="Djimmah">Djimmah</MenuItem>
                  <MenuItem value="Hrrar">Harrar</MenuItem>
                  <MenuItem value="Limu">Limu</MenuItem>
                  <MenuItem value="Teppi">Teppi</MenuItem>
                  <MenuItem value="Gujji">Gujji</MenuItem>
                  <MenuItem value="Lekmpti">Lekempti</MenuItem>
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
              style={{ backgroundColor: "#4A2C2A" }}
              onClick={() => setChange(!change)}>
              Submit Request
            </Button>
            <Button
              className="button"
              onClick={() => setChange(!change)}>
              Contact Us
            </Button>

          </div>
          <div className="one">
            <TextField className='texting' label="Company Name"
              onChange={(e) => setName(e.target.value)}
              fullWidth
              type="text"
              required />
          </div>
          <div className="position">
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
          </div>
          <div className="position">
            <div className="one">
            <TextField className='texting' label="Commodity"
                onChange={(e) => setCommodity(e.target.value)}
                fullWidth
                type="text"
                required />
              {/* <Box className="texting">
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
              </Box> */}
            </div>
            <div className="one">

              <Box className="texting">
                <FormControl fullWidth>
                  <InputLabel >Processing</InputLabel>
                  <Select

                    value={processing}
                    label="Coffee Profile"
                    onChange={(e) => setProcessing(e.target.value)}
                    required
                  >
                    <MenuItem value="Washed">Washed</MenuItem>
                    <MenuItem value="Natural">Natural</MenuItem>

                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
          <div className="position">
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
                    <MenuItem value="Hrrar">Harrar</MenuItem>
                    <MenuItem value="Limu">Limu</MenuItem>
                    <MenuItem value="Teppi">Teppi</MenuItem>
                    <MenuItem value="Gujji">Gujji</MenuItem>
                    <MenuItem value="Lekmpti">Lekempti</MenuItem>
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
          </div>
          <div className="position">
            <div className="position">
              <div className="one">

                <TextField className='texting' label="Volume"
                  onChange={(e) => setVolume(e.target.value)}
                  value={volume}
                  fullWidth
                  type="number"
                  required />
              </div>
              <div className="one">
                <TextField className='texting' label="Unit"
                  onChange={(e) => setUnit(e.target.value)}
                  value={unit}
                  fullWidth
                  type="text"
                  required />
              </div>
            </div>
            <div className="position">
              <div className="one">
                <TextField
                  className='texting' label="Target Price"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  type="number"
                />
              </div>
              <div className="one">
                <Box className="texting" >
                  <FormControl className='texting'>
                    <InputLabel >Unit</InputLabel>
                    <Select

                      value={anotherUnit}
                      label="Coffee Profile"
                      onChange={(e) => setAnotherUnit(e.target.value)}
                      required
                    >
                      <MenuItem value="$/lbs">$/lbs</MenuItem>
                      <MenuItem value="$/Ton">$/Ton</MenuItem>

                    </Select>
                  </FormControl>
                </Box>

              </div>
            </div>
          </div>
          <div className="position">
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
                // defaultValue="2022-10-21"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => setPeriod(e.target.value)}
                value={period}
              />
            </div>
          </div>
          <div className="one">
            <TextField
              label="Additional Requirements"
              type="text"
              onChange={(e) => setRequirment(e.target.value)}
              value={reuirment}
            />
          </div>
          <div className="two">
            <Button
              onClick={(e) => console.log(message, email, name)}
              type="submit"
              disabled={isLoading}
              startIcon={isLoading ? <CircularProgress color="inherit" size={25} /> : null}
            > Send</Button>
            {error ? <span style={{ color: color, marginLeft: 40 }}> {know}</span> : <span></span>}
          </div>

        </div>
      }



      {/* second form  */}


    </div >
  )
}
