import { useState, useEffect } from 'react';

const API_URL = 'https://voiceoverbyian.com/vobiAPI.php';

const VobiAPI = () => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  console.log(setData, setMessage, setLoading);
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched Data:', data);
      })
      .catch((error) => console.error('Fetch Error:', error));

    // const fetchData = async () => {
    //   setLoading(true);
    //   try {
    //     const response = await fetch(API_URL);

    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     const result = await response.json();
    //     if (result.status === 'success') {
    //       setData(result.data);
    //       setMessage('Data fetched successfully');
    //     } else {
    //       console.log(result);
    //       throw new Error(result.message);
    //     }
    //   } catch (error) {
    //     setMessage(`Errorz: ${(error as Error).message}`);
    //   } finally {

    //     setLoading(false);
    //   }
    // };

    // fetchData();
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
              <th>Count</th>
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
