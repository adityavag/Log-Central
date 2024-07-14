import React from 'react'

export default function Logs() {
  return (
    <div className='p-20'>
      {/* <span className='text-3xl font-bold mb-10'>Query</span> */}
      <form>
        <div className='grid grid-cols-1 border rounded shadow p-8'>
          <div>
            <label className='block text-sm font-bold text-gray-700 mb-2' htmlFor='property'>
              Select Property
            </label>
            <select
              id='property'
              name='property'
              className='w-full p-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
            >
              <option value="">Select</option>
              <option value="level">Level</option>
              <option value="message">Message</option>
              <option value="resourceId">Resource ID</option>
              <option value="timestamp">Timestamp</option>
              <option value="traceId">Trace ID</option>
              <option value="spanId">Span ID</option>
              <option value="commit">Commit</option>
            </select>
          </div>
          <div>
            <label className='block mb-2 text-sm font-bold text-gray-700 mt-2' htmlFor='value'>
              Enter Value
            </label>
            <input
              type="text"
              id="value"
              name="value"
              placeholder='Value'
              className='w-full p-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline mb-4'
            />
          </div>
          <div>
            <button
              type="submit"
              className='w-full bg-[#e297de] p-4 rounded-md hover:bg-[#854081] hover:text-white font-semibold'>
              Query Logs
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
