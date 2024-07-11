import styles from "./page.module.css";
import MessageFetcher from "./_components/MessageFetcher";

const Home = () => {
  return (
    <div className={styles.content}>
      <MessageFetcher />
    </div>
  );
}

export default Home;
