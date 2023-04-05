import type { NextPage } from "next";
import SurauReview from "../../components/SurauReview";
import Head from "next/head";


const SurauPage: NextPage = () => {
  
 
  return (
    <div>
      <Head>
        <title>Ratemysurau | Review</title>
      </Head>
      <SurauReview />
    </div>
  )
}

export default SurauPage;
