import React from 'react'
import axios from 'axios'
import HeadLayout from '../../src/components/HeadLayout'
import TrainingPage from '../../src/components/landing/training/'

const Training = ({training}) => {
  console.log(training)
  return (
   <>
    <HeadLayout title={training?.course?.courseName}  description={training?.description}  image={training?.thumbnail} >
      <TrainingPage training={training}/>
    </HeadLayout>
   </>

  )
}


export const  getServerSideProps = async ({query})=>{
 const API = process.env.NODE_ENV === 'production' ? 'https://gobeze.com' : 'http://localhost:3000'
  const res = await axios.get(`${API}/api/classes/${query.slug}`);
  // console.log(res)
  const training = res.data;
  // const {data} = await res.data
  // console.log(JSON.stringify(data))
  return {
    props:{
      training
    }
  }
}

export default Training