import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://voiceoverbyian.com/vobiAPI.php';

const VobiAPI = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        if (response.data.status === 'success') {
          setData(response.data.data);
          setMessage('Data fetched successfully');
        } else {
          console.log(response);
          throw new Error(response.data.message);
        }
      } catch (error) {
        setMessage(`Errorz: ${(error as Error).message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>API Response</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Stat Name</th>
              <th>&nbsp;&nbsp;&nbsp;Count</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: { stat_name: string; count: number }) => (
              <tr key={item.stat_name}>
                <td>{item.stat_name}</td>
                <td>{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <p>{message}</p>
    </div>
  );
};

export default VobiAPI;
