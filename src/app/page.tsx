import styles from './page.module.css'
import { data } from '../lib/data';
import CustomSearch from '@/lib/CustomSearch';

const Home = () => {
  return (
    <main className={styles.main}>
      <div style={{ width: 400, textAlign: 'center' }}>
        <h1 style={{ margin: '2rem 0' }}>Microsoft Acronyms</h1>
        <p style={{ marginBottom: '1rem', color: '#555' }}>
          Search and browse Microsoft acronyms and their meanings.
        </p>
        <CustomSearch data={data}/>
        <div style={{ marginTop: '2rem', fontSize: '0.95rem', color: '#888' }}>
          <p>Results will appear below as you search. If no dataset exists, placeholder results will be shown.</p>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <a href="https://github.com/achrafbenalaya/MicrosoftAcronyms001" target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem' }}>
            GitHub Repository
          </a>
          <a href="https://github.com/achrafbenalaya/MicrosoftAcronyms001/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">
            CONTRIBUTING.md
          </a>
        </div>
      </div>
    </main>
  )

}


export default Home;