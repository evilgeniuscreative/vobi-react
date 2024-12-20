import { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://voiceoverbyian.com/vobiAPI.php';

function VobiAPI() {
  const [message, setMessage] = useState('');

  const handleRequest = async (endpoint:any) => {
    try {
      const response = await axios.post(`${API_URL}${endpoint}`);
      setMessage(response.data.message);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage('An unexpected error occurred');
      }
    }
  };

  return (
    <div>
      <h2>VOBI API Interface</h2>
      <div>
        <button onClick={() => handleRequest('/addCommercial')}>Add Commercial</button>
        <button onClick={() => handleRequest('/addCharacter')}>Add Character</button>
        <button onClick={() => handleRequest('/pauseCommercial')}>Pause Commercial</button>
        <button onClick={() => handleRequest('/pauseCharacter')}>Pause Character</button>
        <button onClick={() => handleRequest('/DLCommercial')}>Download Commercial</button>
        <button onClick={() => handleRequest('/DLCharacter')}>Download Character</button>
        <button onClick={() => handleRequest('/DLResume')}>Download Resume</button>
        <button onClick={() => handleRequest('/VResume')}>View Resume</button>
      </div>
      {message && <p>Response: {message}</p>}
    </div>
  );
}

export default VobiAPI;
