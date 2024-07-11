"use client"

import styles from './components.module.css';
import useInstantFetch from '../../../hooks/useInstantFetch';

const MessageFetcher = () => {
  const ENDPOINT_PATH = '/api/data';
  const dataInitialValue = '';
  const { data, loading, error, instantFetch } = useInstantFetch(ENDPOINT_PATH, dataInitialValue);

  return (
    <div className={styles['button-group']}>
      <div>{loading ? 'loading..' : data ? data : 'Waiting for data..' }</div>
      <button onClick={instantFetch} disabled={loading}>
        {loading ? 'Loading..' : 'Get Message'}
      </button>
    </div>
  );
}

export default MessageFetcher;
