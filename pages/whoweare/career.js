
import React from 'react'
import Career from '../../components/career/Career';

const career = ({jobsDetailsResponse}) => {

  return (
   <Career jobsDetailsResponse = {jobsDetailsResponse} />
  )
}

export default career

export async function getServerSideProps() {
  try {
    const res = await fetch('http://hrm.bnt-soft.com/hrm/admin/opening/openinglist');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const response = await res.json();

    return {
      props: {
        jobsDetailsResponse: response
      }
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        jobsDetailsResponse: []
      }
    };
  }
}
