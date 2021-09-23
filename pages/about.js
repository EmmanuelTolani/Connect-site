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
     <Section2 color="black" height="100%" bG="https://images.pexels.com/photos/1112633/pexels-photo-1112633.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" title="Try New Workouts">
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     </Section2>
     <Section3 color="white" height="100%" bG="https://images.pexels.com/photos/6740823/pexels-photo-6740823.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" title="Create Workouts">
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     </Section3>
     <Section1 color="black" height="100%" bG="https://images.pexels.com/photos/7937471/pexels-photo-7937471.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" title="Discover New Recipes">
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     </Section1>
     <Section3 color="white" height="100%" bG="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" title="Create Recipe">
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     </Section3>
    </MainLayout>
  )
}
