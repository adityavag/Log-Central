import React, { useState } from 'react'
import ingest from '../assets/images/ingest.jpg';
export default function Ingestor() {

  const [formData, setFormData] = useState({
    level: '',
    message: '',
    resourceId: '',
    timestamp: '',
    traceId: '',
    spanId: '',
    commit: '',
    metadata: ''
  });

  const handleInputChange = (e) => {
    setFormData((prevData) => ({
      ...prevData, [e.target.name]: [e.target.value]
    }));
  }
  const handleSubmit = (e) => {
    setFormData(
      {
        level: '',
        message: '',
        resourceId: '',
        timestamp: '',
        traceId: '',
        spanId: '',
        commit: '',
        metadata: ''
      });
    console.log('Ingested')
  }

  return (
    <div className='p-12 grid grid-cols-2 max-md:grid-cols-1 max-md:space-y-5 max-sm:grid-cols-1'>
      {/* Form */}
      <div className='flex flex-col justify-center'>
        <form>
        <span className='text-2xl font-semibold'>Ingest New Log</span>
          <div className='' id='form'>
            {/* Label */}
            <div>
              <label className='block mb-1 font-bold text-gray-700'>Level</label>
              <input className='w-full p-1 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline'
                id="level"
                type='text'
                value={formData.level}
                onChange={handleInputChange}
                name='level' />
            </div>
            {/* Message */}
            <div>
              <label className='block mb-1 font-bold text-gray-700'>Message</label>
              <input className='w-full p-1 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline'
                id="message"
                type='text'
                value={formData.message}
                onChange={handleInputChange}
                name='message' />
            </div>
            {/* Resource ID */}
            <div>
              <label className='block mb-1 font-bold text-gray-700'>Resource ID</label>
              <input className='w-full p-1 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline'
                id="resourceId"
                type='text'
                value={formData.resourceId}
                onChange={handleInputChange}
                name='resourceId' />
            </div>
            {/* TimeStamp */}
            <div>
              <label className='block mb-1 font-bold text-gray-700'>TimeStamp</label>
              <input className='w-full p-1 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline'
                id="timestamp"
                type='text'
                value={formData.timestamp}
                onChange={handleInputChange}
                name='timestamp' />
            </div>
            {/* Trace ID */}
            <div>
              <label className='block mb-1 font-bold text-gray-700'>Trace ID</label>
              <input className='w-full p-1 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline'
                id="traceId"
                type='text'
                value={formData.traceId}
                onChange={handleInputChange}
                name='traceId' />
            </div>
            {/* Spand ID */}
            <div>
              <label className='block mb-1 font-bold text-gray-700'>Span ID</label>
              <input className='w-full p-1 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline'
                id="spanId"
                type='text'
                value={formData.spanId}
                onChange={handleInputChange}
                name='spanId' />
            </div>
            {/* Commit */}
            <div>
              <label className='block mb-1 font-bold text-gray-700'>Commit</label>
              <input className='w-full p-1 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline'
                id="commit"
                type='text'
                value={formData.commit}
                onChange={handleInputChange}
                name='commit' />
            </div>
            {/* Metadata */}
            <div>
              <label className='block mb-1 font-bold text-gray-700'>MetaData</label>
              <input className='w-full p-1 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline'
                id="metadata"
                type='text'
                value={formData.metadata}
                onChange={handleInputChange}
                name='metadata' />
            </div>
          </div>
          <button
          type='submit'
          className='bg-[#e297de] p-2 mt-2 w-full rounded-md hover:bg-[#854081] hover:text-white font-semibold'>
            Ingest
          </button>
        </form>
      </div>
      {/* Image */}
      <div><img src={ingest} className='animate-up-down max-md:mt-16 max-sm:mt--16' /></div>
    </div>
  )
}
