import Head from 'next/head'
import MainLayout from '../components/layouts/MainLayout'
import Hero from '../components/Hero/Hero'
import Section2 from '../components/Section/Section2/Section2'
import Section1 from '../components/Section/Section1/Section1'
import Section3 from '../components/Section/Section3/Section3'

export default function Home() {
  return (
    <MainLayout>
     {/* <Hero color="white" title="Join Beta" bG="https://images.pexels.com/photos/4024914/pexels-photo-4024914.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" height="100vh">
        If you’re interested in becoming a beta user for connect, please fill out the following questions below! 
         </Hero> */}
         <div className="join-beta">
            <div className="join-beta__img">
            </div>
            <div className="join-beta__form">
                <form>
                    
                </form>
             </div>
         </div>
    </MainLayout>
  )
}
