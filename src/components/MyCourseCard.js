import React from "react";

function MyCourseCard({ course }) {
  // Assuming course.progress is a value between 0 and 100 representing the progress percentage
  //   const progress = course?.progress || 0;

  const handleCompleteClick = () => {
    // Handle completion logic here
    // console.log(`Course ${course?.name} marked as complete`);
  };
  return (
    <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900'>
      <div className='h-52 w-52 mx-auto'>
        <img
          src='https://th.bing.com/th/id/OIP.zXu2vsYPZ5mqF0tOB7kupAHaHa?w=512&h=512&rs=1&pid=ImgDetMain'
          alt=''
        />
      </div>
      <h1 className='font-bold text-center'>{course?.name}</h1>
      <p className='text-center font-semibold mb-3'>{course?.instructor}</p>
      <div className='flex flex-col items-center mb-3'>
        {course.complete ? (
          <button
            onClick={handleCompleteClick}
            className='bg-indigo-500 hover:bg-indigo-700 text-white font-thin py-1 px-2 rounded-lg text-center mb-2'>
            Complete
          </button>
        ) : (
          <button
            onClick={handleCompleteClick}
            className='bg-indigo-500 hover:bg-indigo-700 text-white font-thin py-1 px-2 rounded-lg text-center mb-2'>
            Complete Course
          </button>
        )}
        <div className='w-full bg-gray-300 h-3 rounded-full'>
          <div
            className='bg-indigo-500 h-full rounded-full'
            style={{ width: `${10}%` }}
          />
        </div>
        <p className='mt-1 text-sm'>{`${10}% Complete`}</p>
      </div>

      <div className=' flex-1'></div>
    </div>
  );
}

export default MyCourseCard;
