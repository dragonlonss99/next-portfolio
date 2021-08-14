// import { GetServerSidePropsContext, GetStaticPropsContext } from "next"
import { motion } from "framer-motion"
import { fadeInUp, routerAnimation, stagger } from "../animations"
import ServiceCard from "../components/ServiceCard"
import { services } from "../data"
import Head  from "next/head"

const index = () => {
  return (
    <motion.div className='flex flex-col flex-grow px-6 pt-1' variants={routerAnimation} initial='initial' animate='animate' exit='exit'>
      <Head>
        <title>Web Developer | porfolio | Aaron</title>
      </Head>
      <h6 className='my-3 text-base font-medium'>
        I am currently pursuing B.Tech Degree(Final Year) in Computer Science
        Engineering from Academy of Technology. I have 3+ years of experience in
        Web Development and I have a Youtube Channel where I teach Full Stack
        Web Development
      </h6>
      <div className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100' style={{marginLeft:'-1.5rem', marginRight:'-1.5rem'}}>
        <h6 className='my-3 text-xl font-bold tracking-wide'>What I am doing</h6>
        <motion.div className='grid gap-6 my-3 lg:grid-cols-2' variants={stagger}>
          {
            services.map((service, idx) => (
              <motion.div className='col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1' 
                          key={idx} variants={fadeInUp}>
                <ServiceCard service={service} />
              </motion.div>
            ))
          }
        </motion.div>
      </div>
    </motion.div>
  )
}

export default index

// export const getStaticProps = async(context:GetStaticPropsContext) => {

//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();  

//   return {
//     props: {
//       services: data.services,
//     }
//   }
// }

// export const getServerSideProps = async(context:GetServerSidePropsContext) => {

//   // const res = await fetch(`${process.env.VERCEL_URL}/api/services`);
//   // const data = await res.json();  

//   return {
//     props: {
//       // services: data.services,
//       endpoint: process.env.VERCEL_URL, 
//     }
//   }
// }