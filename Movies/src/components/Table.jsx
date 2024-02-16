import React from 'react'

const Table = () => {
  return (
   <>

   <table className='border'>
  <tr>
    <th className='border' colSpan={5}>Time Table</th>
  </tr>
  <tr>
    <th className='border text-yellow-500'>Time</th>
    <td>10:00 - 1:00pm</td>
    <td>1:00- 1:15pm</td>
    <td>1:45 - 3:45pm</td>
    <td>4:15 - 6:00pm</td>
  </tr>
  <tr>
   <td className='text-yellow-500'>Monday</td>
   <td colSpan={2}>Office</td>
   <td>Lab</td>
   <td>Office</td>
  </tr>
  <tr>
   <td className='text-yellow-500'>Tueday</td>
   <td colSpan={4}>Office</td>
  </tr>
  <tr>
   <td className='text-yellow-500'>Wednesday</td>
   <td colSpan={2}>Office</td>
   <td>Lab</td>
   <td>Office</td>
  </tr>
  <tr>
   <td className='text-yellow-500'>Thursday</td>
   <td colSpan={2}>Office</td>
   <td>Lab</td>
   <td>Office</td>
  </tr>
  <tr>
   <td className='text-yellow-500'>Firday</td>
   <td colSpan={4}>Office</td>
  </tr>
</table>
   
   </>
  )
}

export default Table