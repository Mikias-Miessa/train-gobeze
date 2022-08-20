import React from 'react';
import HeadLayout from '../../src/components/HeadLayout';
import Certificate from '../../src/components/landing/certificate/';

const Training = () => {
  const student = {
    certificateImage: 'http://localhost:3000/certificates/smm.png',
    name: 'Natnael Feleke',
  };

  return (
    <>
      <HeadLayout title={`Natnael Feleke | Gobeze`}>
        <Certificate student={student} />
      </HeadLayout>
    </>
  );
};

export default Training;
