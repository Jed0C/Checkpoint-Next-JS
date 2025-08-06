import Image from 'next/image'
import styles from '../styles/Projects.module.css'

export default function ProjectCard({ title, description, image }) {
  return (
    <div className={styles.projectCard}>
      <Image src={image} alt={title} width={400} height={250} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
