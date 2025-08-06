import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to My Portfolio</h1>
      <p className={styles.subtitle}>Built with Next.js App Router</p>
    </div>
  )
}
