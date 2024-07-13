import React from 'react'
import ingest from '../assets/images/ingest.jpg';
export default function Ingestor() {
  return (
    <div className='p-12 grid grid-cols-2 max-md:grid-cols-1 max-md:space-y-5 max-sm:grid-cols-1'>
      {/* Form */}
      <div>
        <form>
          <div className='' id='form'>
            {/* Label */}
            <div>
              <label className='block mb-1 font-bold text-gray-700'>Level</label>
              <input className='w-full p-1 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline'
                id="level"
                type='text'
                name='level' />
            </div>
            {/* Message */}
            <div>
              <label className='block mb-1 font-bold text-gray-700'>Message</label>
              <input className='w-full p-1 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline'
                id="message"
                type='text'
                name='message' />
            </div>
            {/* Resource ID */}
            <div>
              <label className='block mb-1 font-bold text-gray-700'>Resource ID</label>
              <input className='w-full p-1 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline'
                id="resourceId"
                type='text'
                name='resourceId' />
            </div>
            {/* TimeStamp */}
            <div>
              <label className='block mb-1 font-bold text-gray-700'>TimeStamp</label>
              <input className='w-full p-1 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline'
                id="timestamp"
                type='text'
                name='timestamp' />
            </div>
            {/* Trace ID */}
            <div>
              <label className='block mb-1 font-bold text-gray-700'>Trace ID</label>
              <input className='w-full p-1 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline'
                id="traceId"
                type='text'
                name='traceId' />
            </div>
            {/* Spand ID */}
            <div>
              <label className='block mb-1 font-bold text-gray-700'>Span ID</label>
              <input className='w-full p-1 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline'
                id="spanId"
                type='text'
                name='spanId' />
            </div>
            {/* Commit */}
            <div>
              <label className='block mb-1 font-bold text-gray-700'>Commit</label>
              <input className='w-full p-1 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline'
                id="commit"
                type='text'
                name='commit' />
            </div>
            {/* Metadata */}
            <div>
              <label className='block mb-1 font-bold text-gray-700'>MetaData</label>
              <input className='w-full p-1 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline'
                id="metadata"
                type='text'
                name='metadata' />
            </div>
          </div>
        </form>
      </div>
      {/* Image */}
      <div><img src={ingest} className='animate-up-down max-md:mt-16 max-sm:mt--16' /></div>
    </div>
  )
}
