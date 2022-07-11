import React from 'react'
import axios from 'axios'
import HeadLayout from '../../src/components/HeadLayout'
import TrainingPage from '../../src/components/landing/training/'

const Training = ({training}) => {
  console.log(training)
  return (
   <>
    <HeadLayout >
      <TrainingPage training={training}/>
    </HeadLayout>
   </>

  )
}


export const  getServerSideProps = async ({query})=>{
  console.log(query)
  const res = await axios.get(`http://localhost:3000/api/classes/${query.slug}`);
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