import styles from './page.module.css'
import { data } from '../lib/data';
import CustomSearch from '@/lib/CustomSearch';
import { useDarkMode } from './theme';

const Home = () => {
  const [theme, setTheme] = typeof window !== 'undefined' ? useDarkMode() : ['light', () => {}];
  return (
    <main className={styles.main}>
      <div style={{ width: 400, textAlign: 'center' }}>
        <h1 style={{ margin: '2rem 0' }}>Microsoft Acronyms</h1>
        <button
          style={{ marginBottom: '1rem', padding: '0.5rem 1rem', borderRadius: 8, border: 'none', background: 'var(--primary)', color: 'var(--foreground)', cursor: 'pointer' }}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
        <CustomSearch data={data}/>
      </div>
    </main>
  )

}


export default Home;