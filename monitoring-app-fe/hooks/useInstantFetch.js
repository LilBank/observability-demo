import { useState } from "react";

const useInstantFetch = (url, initialValue) => {
	const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

	const instantFetch = async () => {
		try {
			setLoading(true);
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const result = await response.json();
			setData(result);
		} catch (error) {
			setError(error);
		} finally {
			setLoading(false);
		}
	}

	return { data, loading, error, instantFetch };
}

export default useInstantFetch;
