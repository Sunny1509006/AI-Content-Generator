import React, { useState } from 'react';
import axios from '../Axios';
import { LeftSideBar } from '../Profile/LeftSideBar';
import { MdArticle } from "react-icons/md";
import TextField from '@mui/material/TextField';
import { HiInformationCircle } from "react-icons/hi2";
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Button, Grid, Paper } from "@mui/material";

const currencies = [
  {
    value: 'random',
    label: 'random',
  },
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
];

export const InfoArticle = () => {

      const [response, setResponse] = useState('');
      const [keywords, setKeywords] = useState('');
      const [site, setSite] = useState('');
      const [type, setType] = useState('');
      const [label, setLabel] = useState('');
      const [subheading, setSubheading] = useState('random');
      const [faq, setFaq] = useState('random');
      const [imageCount, setImageCount] = useState('');
      const [auth, setAuth] = useState('1');


      const handleKeywords = (e) => {
        setKeywords(e.target.value);
      };
      const handleSite = (e) => {
        setSite(e.target.value);
      };
      const handleType = (e) => {
        setType(e.target.value);
      };
      const handleLabel = (e) => {
        setLabel(e.target.value);
      };
      const handleSubheading = (e) => {
        setSubheading(e.target.value);
      };
      const handleFaq = (e) => {
        setFaq(e.target.value);
      };
      const handleImageCount = (e) => {
        setImageCount(e.target.value);
      };
      const handleAuth = (e) => {
        setAuth(e.target.value);
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/api/article/create', {
            keywords: keywords,
            site: site,
            type: type,
            label: label,
            subheading: subheading,
            faq: faq,
            imageCount: imageCount,
            auth: auth
          });
          setResponse(response.data.result);
          console.log(response.data)
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
  return (
    <div style={{display: 'flex', gap: '20px', justifyContent: 'space-between'}}>
      <LeftSideBar />
      <div style={{width: '70%'}}>
      <div >
        <div style={{display: 'flex', gap: '10px'}}>
      <MdArticle color='#FF4A17' size={25}/>
      <h3>Information Content Single / Bulk</h3> 
      </div> 
      <p>Our AI will help you write 100% unique seo friendly Information article in one click</p>
      </div>  
      <div style={{marginTop: '20px'}}>
      {/* <form onSubmit={handleSubmit}> */}
        <label style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          <h4>Keywords</h4>
          <div style={{display: 'flex', gap: '10px'}}>
          <HiInformationCircle size={20} style={{marginTop: '2px'}}/>
          <p>Write your keywords here. you can write multiple keywords.</p>
          </div>
          {/* <input type="text" name="keywords" value={formData.keywords} onChange={handleChange} /> */}
          <TextField
          id="outlined-multiline-static"
          label="Keywords"
          multiline
          rows={4}
          value={keywords}
          onChange={handleKeywords}
          style={{width: '70%', }}
        />
        </label>
        <br />
        <label  style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <h4>Site</h4>
        <div style={{display: 'flex', gap: '10px'}}>
          <HiInformationCircle size={20} style={{marginTop: '2px'}}/>
          <p>Write here the type of site.</p>
          </div>
          {/* <input type="text" name="site" value={formData.site} onChange={handleChange} /> */}
          <TextField id="outlined-basic" 
          label="Type of site" variant="outlined" value={site}
           onChange={handleSite}
           style={{width: '40%', }}
           />
        </label>
        <br />
        <label style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          {/* <input type="text" name="type" value={formData.type} onChange={handleChange} /> */}
          <h4>Type</h4>
        <div style={{display: 'flex', gap: '10px'}}>
          <HiInformationCircle size={20} style={{marginTop: '2px'}}/>
          <p>Write here the type of article.</p>
          </div>
          {/* <input type="text" name="site" value={formData.site} onChange={handleChange} /> */}
          <TextField id="outlined-basic" 
          label="Type of Article" variant="outlined" value={type} 
          onChange={handleType}
           style={{width: '40%', }}
           />
        </label>
        <br />
        <label style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          {/* <input type="text" name="label" value={formData.label} onChange={handleChange} /> */}
          <h4>Label</h4>
        <div style={{display: 'flex', gap: '10px'}}>
          <HiInformationCircle size={20} style={{marginTop: '2px'}}/>
          <p>Write here labels.</p>
          </div>
          {/* <input type="text" name="site" value={formData.site} onChange={handleChange} /> */}
          <TextField
          id="outlined-multiline-static"
          label="Labels"
          multiline
          rows={3}
          value={label} onChange={handleLabel}
          style={{width: '50%', }}
        />
        </label>
        <br />
        <label style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          <h4>Number of Sub-heading</h4>
          {/* <input type="text" name="subheading" value={formData.subheading} onChange={handleChange} /> */}
          <TextField
          id="outlined-select-currency"
          select
          label="Select"
          // defaultValue="random"
          value={subheading}
          onChange={handleSubheading}
          helperText="Please select your number"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </label>
        <br />
        <label style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <h4>Number of FAQs</h4>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          // defaultValue="random"
          value={faq}
          onChange={handleFaq}
          helperText="Please select your number"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
          {/* <input type="text" name="faq" value={formData.faq} onChange={handleChange} /> */}
        </label>
        <br />
        <label style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          <h4>Image Count</h4>
          <div style={{display: 'flex', gap: '10px'}}>
          <HiInformationCircle size={20} style={{marginTop: '2px'}}/>
          <p>Write here the number of images.</p>
          </div>
          {/* <input type="text" name="site" value={formData.site} onChange={handleChange} /> */}
          <TextField id="outlined-basic" 
          label="Number of images" variant="outlined" value={imageCount} 
          onChange={handleImageCount}
           style={{width: '40%', }}
           />
          {/* <input type="number" name="imageCount" value={formData.imageCount} onChange={handleChange} /> */}
        </label>
        <br />
        {/* <button type="submit">Submit</button> */}
        <Button className="text_field_sign custom-button" onClick={handleSubmit}>Submit</Button>
      {/* </form> */}
      </div>
      {response && <div dangerouslySetInnerHTML={{ __html: response.text }} style={{marginTop: '20px'}}/>}
      </div>
    </div>
  )
}


