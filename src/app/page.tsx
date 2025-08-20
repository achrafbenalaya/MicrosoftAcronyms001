import styles from './page.module.css'
import { data } from '../lib/data';
import CustomSearch from '@/lib/CustomSearch';
import ThemeToggle from './ThemeToggle';

const Home = () => {
  return (
    <main className={styles.main}>
      <div style={{ width: 400, textAlign: 'center' }}>
        <h1 style={{ margin: '2rem 0' }}>Microsoft Acronyms</h1>
        <ThemeToggle />
        <CustomSearch data={data}/>
      </div>
    </main>
  )

}


export default Home;