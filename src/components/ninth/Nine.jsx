import React, { useState } from 'react'
import Axios from "axios"
import { Phone, Email, LocationOn } from '@mui/icons-material';
import "./nine.scss";

import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import CircularProgress from "@mui/material/CircularProgress";
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

import { useQuery, useMutation } from "react-query";
export default function Nine() {
  const [age, setAge] = useState('');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false)
  const [know, setKnow] = useState("")
  const [error, setErrors] = useState(false)
  const send = async (user) => {
    const reply = await Axios.post("https://jazzythings.herokuapp.com/api/user/coffee", user);
    return reply.data;
  };
  const { mutate, isLoading } = useMutation(send, {
    onSuccess: (data) => {
      setSuccess(true);
      setErrors(false)
      // console.log(data);
      setKnow("User created successfully.");
    },
    onError: (e) => {
      setErrors(true);
      setKnow(e.response.data.error.message);
      // console.log(e);
    },
  });
  
  const handleChange = async (e) => {
    e.preventDefault();
    console.log("hellow")
    const user = { name, email, message, age };
    if (name.length > 1 && email.length > 1 && message.length > 1 ) {
      mutate(user);
    } else {
      setErrors(true);
      setKnow("please make sure you've correctly filled the boxes'");
    }
 console.log(error,know)
  };
  return (
    <div className='nine' id="contact us">
      <div className="first">
        <div className="wahid">
          <h2>
            Your inquiry
          </h2>
          <span>
            Fill up the for and our Team will get back to you withen 24 houres.
          </span>

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
            <span>help@diligentradesolutions.com</span>
          </div>
          <div className="estenen">
            <div className="image">
              <LocationOn />
            </div>
            <span>Addis Ababa, 05street 100</span>
          </div>


        </div>

      </div>
      <div className="second">
        <div className="one">
          
          <TextField className='texting' label="Name"
            onChange={(e) => setName(e.target.value)}
            fullWidth
            type="text" 
            required/>
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
                onChange={(e)=>setAge(e.target.value)}
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
            type="email"
            multiline
            rows={5}
            required
          />
        </div>
        <div className="two">
          <Button
            onClick={(e)=>handleChange(e)}
            type="submit"
            disabled={isLoading}
            startIcon={isLoading ? <CircularProgress color="inherit" size={25} /> : null} 
          > Send</Button>
          {error?<span style={{color: "red", marginLeft:40}}> {know}</span>:<span></span>}
        </div>
      </div>
    </div>
  )
}
