import Head from 'next/head'
import MainLayout from '../components/layouts/MainLayout'
import Hero from '../components/Hero/Hero'
import Section2 from '../components/Section/Section2/Section2'
import Section1 from '../components/Section/Section1/Section1'
import Section3 from '../components/Section/Section3/Section3'

export default function Home() {
  return (
    <MainLayout>
     <Hero color="white" title="The First Social Media Platform For Health" bG="https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" height="100vh">
     Connect is short form video and photo sharing social media platform focused on fitness, nutrition and culture. 
         </Hero>
     <section className="connect-section">
       <h2 className="connect-section__title">Connect</h2>
       <p className="connect-section__subtitle">Show your creativity</p>
       <p className="connect-section__subtitle1">Share your creations and promote  your business</p>
     </section>
     <section className="create-section">
       <h2 className="create-section__title">Create</h2>
       <p className= "create-section__subtitle" >Show the world how you take care of your body and become a content creator</p>
     </section>
     <section className="explore-section">
       <h2 className="explore-section__title">Explore</h2>
       <p className='explore-section__subtitle'>Find new ideas, expand your horizons and test your limits</p>
     </section>
     <section className="new-section">
       <h2 className="new-section__title">Always something new</h2>
       <p className="new-section__subtitle">Follow accounts with simliar interest and view them on your feed.</p>
     </section>
    </MainLayout>
  )
}
