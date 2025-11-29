import HeroSection from '@/components/hero'
import AboutSection from '@/components/about-section'
import ProjectsSection from '@/components/projects-section'
import GitHubStats from '@/components/github-stats'
import Achievements from '@/components/achievements'
import ExperienceSection from '@/components/experience-section'
import ContactSection from '@/components/contact-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection limit={4} />
      <GitHubStats />
      <Achievements />
      <ExperienceSection />
      <ContactSection />
    </>
  )
}
