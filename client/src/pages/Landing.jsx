import React from 'react'
import landing from '../assets/images/landing.jpg';
export default function Landing() {
    return (
        <div className='p-12 grid grid-cols-2 max-md:grid-cols-1 max-md:space-y-5 max-sm:grid-cols-1'>
            <div className='flex flex-col align-middle justify-center space-y-5'>
                <div className='text-6xl font-extrabold '>Log Central</div>
                <div>
                    {/* <div>Log Central provides a robust platform for ingesting, storing, and querying logs efficiently.</div> */}
                    <div className='my-3'>Log Central offers a reliable platform designed for seamless log ingestion, secure storage, and efficient querying. Our straightforward approach ensures smooth integration and streamlined management of your log data, empowering you to gain valuable insights effortlessly.</div>
                    <div className='features-list'>
                        <span className='font-bold'>Key Features:</span>
                        <ul className='font-semibold'>
                            <li>Real Time Log Ingestion</li>
                            <li>Powerful Query Interface</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div><img src={landing} className='animate-up-down max-md:mt-16 max-sm:mt--16'/></div>
        </div>
    )
}
