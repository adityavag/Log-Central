import React, { useState } from 'react'
import axios from 'axios';
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

  const insertCurrentTime = () => {
    const currentTime = new Date().toISOString;
    setFormData((prevData) => ({ ...prevData, timestamp: currentTime }));
  }
  const handleInputChange = (e) => {
    console.log(e.target.name + " : " + e.target.value)
    setFormData((prevData) => ({
      ...prevData, [e.target.name]: [e.target.value]
    }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    try {
      console.log(formData);
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
    } catch (error) {
      console.log('Error Ingesting Log :', error);
    }
  }

  return (
    <div className='p-12 grid grid-cols-2 max-md:grid-cols-1 max-md:space-y-5 max-sm:grid-cols-1 max-lg:grid-cols-1'>
      {/* Form */}
      <div className='flex flex-col justify-center'>
        <form className='' onSubmit={handleSubmit}>
          <span className='text-2xl font-semibold'>Ingest New Log</span>
          <div className='' id='form'>
            {/* Label */}
            <div>
              <label className='block mb-1 font-bold text-gray-700' htmlFor='level'>Level</label>
              <input className='w-full p-1 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline'
                id="level"
                type='text'
                name='level'
                value={formData.level}
                onChange={handleInputChange}
              />
            </div>
            {/* Message */}
            <div>
              <label className='block mb-1 font-bold text-gray-700' htmlFor='message'>Message</label>
              <input className='w-full p-1 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline'
                id="message"
                type='text'
                name='message'
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            {/* Resource ID */}
            <div>
              <label className='block mb-1 font-bold text-gray-700' htmlFor='resourceId'>Resource ID</label>
              <input className='w-full p-1 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline'
                id="resourceId"
                type='text'
                name='resourceId'
                value={formData.resourceId}
                onChange={handleInputChange}
              />
            </div>
            {/* TimeStamp */}
            <div>
              <label className='block mb-1 font-bold text-gray-700' htmlFor='timestamp'>TimeStamp</label>
              <input className='w-full p-1 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline'
                id="timestamp"
                type='text'
                name='timestamp'
                value={formData.timestamp}
                onChange={handleInputChange}
              />
            </div>
            {/* Trace ID */}
            <div>
              <label className='block mb-1 font-bold text-gray-700' htmlFor='traceId'>Trace ID</label>
              <input className='w-full p-1 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline'
                id="traceId"
                type='text'
                name='traceId'
                value={formData.traceId}
                onChange={handleInputChange}
              />
            </div>
            {/* Spand ID */}
            <div>
              <label className='block mb-1 font-bold text-gray-700' htmlFor='spanId'>Span ID</label>
              <input className='w-full p-1 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline'
                id="spanId"
                type='text'
                name='spanId'
                value={formData.spanId}
                onChange={handleInputChange}
              />
            </div>
            {/* Commit */}
            <div>
              <label className='block mb-1 font-bold text-gray-700' htmlFor='commit'>Commit</label>
              <input className='w-full p-1 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline'
                id="commit"
                type='text'
                name='commit'
                value={formData.commit}
                onChange={handleInputChange}

              />
            </div>
            {/* Metadata */}
            <div>
              <label className='block mb-1 font-bold text-gray-700' htmlFor='metadata'>MetaData</label>
              <input className='w-full p-1 leading-tight text-gray-700 border rounded focus:outline-none focus:shadow-outline'
                id="metadata"
                type='text'
                name='metadata'
                value={formData.metadata}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <button
            type='submit'
            className='bg-[#e297de] p-2 mt-2 w-full rounded-md hover:bg-[#854081] hover:text-white font-semibold'
          >
            Ingest
          </button>
        </form>
      </div>
      {/* Image */}
      <div><img src={ingest} className='animate-up-down max-md:mt-16 max-sm:mt--16' /></div>
    </div>
  )
}
