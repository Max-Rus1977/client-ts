import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.stylishHeader}>
      <div className="box-content">
        <div className={styles.boxLogoLogin}>
          <div className={styles.logo}>
            <Link to={'/'}>
              <h1>maxBLOG</h1>
            </Link>
          </div>
          <nav className={styles.auth}>
            {/*  
            * *TODO*: Подключить маршруты 'auth/login' и 'auth/register' 
            * после создания страниц авторизации и регистрации 
            */}
            <Link to={'auth/login'} className={styles.loginBtn}>Log In</Link>
            <Link to={'auth/register'} className={styles.signUpBtn}>Sign Up</Link>
          </nav>
        </div>

      </div>
    </header >
  )
}

export default Header