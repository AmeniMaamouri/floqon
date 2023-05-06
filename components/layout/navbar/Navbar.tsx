import styles from "./navbar.module.scss"
import { FiLogOut } from "react-icons/fi";


const Navbar: React.FC<any> = () => {

  return (
    <div className={styles.navbar}>
      <div className={styles.logoSidebar}>
        FLOQON
      </div>

      <div className={styles.navbar__elements}>
        <a style={{ textDecoration:'none', color:'black'}} href="/"><p style={{ background: '#EBB22C', padding: "7px", borderRadius: '10px', fontSize: '15px', cursor: 'pointer' }}>Revenir au site</p></a>
        {/* <FiLogOut style={{ cursor: 'pointer' }} size={20} /> */}

      </div>
    </div>
  );
}

export default Navbar;