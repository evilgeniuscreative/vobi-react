import { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://voiceoverbyian.com/vobiAPI.php';

function VobiAPI() {
  const [stats, setStats] = useState({
    addCommercial: 0,
    addCharacter: 0,
    pauseCommercial: 0,
    pauseCharacter: 0,
    DLCommercial: 0,
    DLCharacter: 0,
    DLResume: 0,
    VResume: 0,
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRequest = async (endpoint: string) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}${endpoint}`);
      if (response.data.status === 'success') {
        setStats((prev) => ({
          ...prev,
          [endpoint.substring(1)]: response.data.count,
        }));
        setMessage(`${endpoint.substring(1)}: ${response.data.count} clicks`);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      setMessage(`Error: ${(error as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='vobi-container'>
      <h2>VOBI Statistics Interface</h2>

      <div className='button-grid'>
        <button
          onClick={() => handleRequest('/addCommercial')}
          disabled={loading}
        >
          Add Commercial ({stats.addCommercial || 0})
        </button>

        <button
          onClick={() => handleRequest('/addCharacter')}
          disabled={loading}
        >
          Add Character ({stats.addCharacter || 0})
        </button>

        <button
          onClick={() => handleRequest('/pauseCommercial')}
          disabled={loading}
        >
          Pause Commercial ({stats.pauseCommercial || 0})
        </button>

        <button
          onClick={() => handleRequest('/pauseCharacter')}
          disabled={loading}
        >
          Pause Character ({stats.pauseCharacter || 0})
        </button>

        <button
          onClick={() => handleRequest('/DLCommercial')}
          disabled={loading}
        >
          Download Commercial ({stats.DLCommercial || 0})
        </button>

        <button
          onClick={() => handleRequest('/DLCharacter')}
          disabled={loading}
        >
          Download Character ({stats.DLCharacter || 0})
        </button>

        <button
          onClick={() => handleRequest('/DLResume')}
          disabled={loading}
        >
          Download Resume ({stats.DLResume || 0})
        </button>

        <button
          onClick={() => handleRequest('/VResume')}
          disabled={loading}
        >
          View Resume ({stats.VResume || 0})
        </button>
      </div>

      {message && (
        <div className={`message ${message.includes('Error') ? 'error' : 'success'}`}>
          {message}
        </div>
      )}
    </div>
  );
}

export default VobiAPI;
