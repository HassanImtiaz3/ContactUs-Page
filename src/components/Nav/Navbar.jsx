import styles from './Nav.module.css'

function Navbar() {
  return (
    <>
      <nav className={`${styles.navigation} container`}>
        <div className={styles.logo}>
          <img src="/images/logo.png" width={50} alt="Hooman Production Logo" />
        </div>
        <div>
          <ul>
            <li href="#">Home</li>
            <li href="#">Aboout</li>
            <li href="#">Contact Us</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
