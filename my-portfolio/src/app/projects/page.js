import ProjectCard from '../../app/components/ProjectCard'
import styles from '../../app/styles/Projects.module.css'

const projects = [
  {
    title: 'Vision UI Dashboard React',
    description: 'a free Material UI admin template designed for those who like modern UI elements build with Next.js and React.',
    image: '/images/img2.png',
  }
]

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Projects</h1>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}
