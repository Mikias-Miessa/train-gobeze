import React from 'react';
import axios from 'axios';
import HeadLayout from '../../src/components/HeadLayout';
import Certificate from '../../src/components/landing/certificate/Certificate';

const CertificatePage = ({ certificate }) => {
  console.log(certificate);
  const student = {
    certificateImage: certificate.certificateImage,
    name: 'Natnael Feleke',
  };

  return (
    <>
      <HeadLayout
        title={`${certificate?.student?.name} | Gobeze`}
        image={`https://gobeze.com/certificates/${certificate?.certificateImage}`}
      >
        <Certificate certificate={certificate} />
      </HeadLayout>
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  console.log('query');
  console.log(query);
  const API =
    process.env.NODE_ENV === 'production'
      ? 'https://gobeze.com'
      : 'http://localhost:3000';
  const res = await axios.get(`${API}/api/certificate/${query.id}`);
  // console.log(res)
  const certificate = res.data;
  // const {data} = await res.data
  // console.log(JSON.stringify(data))
  return {
    props: {
      certificate,
    },
  };
};

export default CertificatePage;
