import { useState } from 'react';
import axios from 'axios';

export default function useJoke() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getJoke = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/jokes', {
        headers: { 'X-Api-Key': '8rj5ETa7bwvtXm1UMu+Azw==zIiDTn4aKjs9p0AJ' },
      });

      if (response.data && response.data.length > 0) {
        setJoke(response.data[0].joke);
      } else {
        setJoke('No joke found.');
      }
    } catch (err) {
      console.error('Error fetching joke:', err.response ? err.response.data : err);
      setError('Error fetching joke.');
    } finally {
      setLoading(false);
    }
  };

  return { joke, loading, error, getJoke };
}
