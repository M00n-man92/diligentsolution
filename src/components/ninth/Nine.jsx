import React, { useState } from 'react'
import { Phone, Email, LocationOn } from '@mui/icons-material';
import "./nine.scss";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
export default function Nine() {
  const [age, setAge] = useState('');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleChange = () => {
    setAge();
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
            <span>+251 92 074 2369</span>
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
            type="text" />
        </div>
        <div className="one">
          
          <TextField
            className='texting' label="Mail"
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            type="email"
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
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            type="email"
            multiline
            rows={5}
          />
        </div>
        <div className="two">
          <button>Send Message</button>
        </div>
      </div>
    </div>
  )
}
