import React, { useState } from 'react';
import axios from '../Axios';

export const InfoArticle = () => {
    const [formData, setFormData] = useState({
        keywords: '',
        site: '',
        type: '',
        label: '',
        subheading: '',
        faq: '',
        imageCount: ''
      });
      const [response, setResponse] = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('/api/article/create', formData);
          setResponse(response.data.result);
          console.log(response.data)
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Keywords:
          <input type="text" name="keywords" value={formData.keywords} onChange={handleChange} />
        </label>
        <br />
        <label>
          Site:
          <input type="text" name="site" value={formData.site} onChange={handleChange} />
        </label>
        <br />
        <label>
          Type:
          <input type="text" name="type" value={formData.type} onChange={handleChange} />
        </label>
        <br />
        <label>
          Label:
          <input type="text" name="label" value={formData.label} onChange={handleChange} />
        </label>
        <br />
        <label>
          Subheading:
          <input type="text" name="subheading" value={formData.subheading} onChange={handleChange} />
        </label>
        <br />
        <label>
          FAQ:
          <input type="text" name="faq" value={formData.faq} onChange={handleChange} />
        </label>
        <br />
        <label>
          Image Count:
          <input type="number" name="imageCount" value={formData.imageCount} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {response && <div dangerouslySetInnerHTML={{ __html: response }} />}
    </div>
  )
}


