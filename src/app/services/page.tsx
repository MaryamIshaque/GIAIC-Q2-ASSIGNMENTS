
import Link from 'next/link'
import cssstyles from "./services.module.css"
const Services = () => {
  return (
    <div className={cssstyles.service}>
      This is about our services page
      <p>We offer multiple services like <span className={cssstyles.skill}><Link href={"/services/graphic-designing"}>Graphic designing</Link></span></p>

    </div>
  )
}

export default Services
