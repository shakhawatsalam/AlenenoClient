import React from 'react'
import ProductCard from '../../components/ProductCard';

const MyCourses = () => {
  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'></div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {/* {courses?.map((course) => (
          <ProductCard key={course._id} course={course} />
        ))} */}
        <ProductCard></ProductCard>
      </div>
    </div>
  );
}

export default MyCourses