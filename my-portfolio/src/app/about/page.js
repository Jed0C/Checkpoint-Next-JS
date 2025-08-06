import styles from '../../app/styles/About.module.css'

import Image from 'next/image'
import profilePic from '../../../public/images/profile.jpg'

export default function About() {
  return (
    <div className={styles.container}>
      <h1>About Me</h1>
      <Image src={profilePic} alt="Profile" width={200} height={200} />
      <p className={styles.text}>
        I’m a developer who loves building modern web apps with React and Next.js.
      </p>
    </div>
  )
}
