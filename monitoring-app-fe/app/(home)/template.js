import styles from "./template.module.css";

const Template = ({ children }) => {
  return (
    <div className={styles.home_layout}>
      <nav className={styles.navbar}>
        <div>
          Navbar
        </div>
      </nav>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}

export default Template;
