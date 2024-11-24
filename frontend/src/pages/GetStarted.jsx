import { useState } from 'react';
import { FaUser, FaGraduationCap, FaLandmark, FaCheck } from 'react-icons/fa6';
import useDataContext from 'context/DataContext';

export default function GetStarted() {
  // const {  } = useDataContext();
  const [step, setStep] = useState(0);
  return (
    <div>
      <h1>Get Started</h1>

      <div className='py-10'>
        <div className='flex justify-between items-center'>

          <div className={`${step<1?'bg-card-bg-grey':step>1?'bg-accent bg-opacity-25':'bg-accent'} h-10 min-w-10 mr-1.5 flex items-center justify-center rounded-full transition-all duration-500`}>
            {step<=1 ? (
              <FaUser className={`${step<1?'text-txt-secondary':'text-black'} transition-all duration-500`} size={21} />
            ) : (
              <FaCheck className={`text-accent transition-all duration-500`} size={22} />
            )}
          </div>

          <div className='w-full bg-card-bg-grey rounded-full h-1'>
            <div className='bg-accent h-1 rounded-full transition-all ease-out duration-500' style={{ width: `${step<2?'0%':'100%'}` }} />
          </div>

          <div className={`${step<2?'bg-card-bg-grey':step>2?'bg-accent bg-opacity-25':'bg-accent'} h-10 min-w-10 mx-1.5 flex items-center justify-center rounded-full transition-all duration-500`}>
            {step<=2 ? (
              <FaGraduationCap className={`${step<2?'text-txt-secondary':'text-black'} transition-all duration-500`} size={23} />
            ) : (
              <FaCheck className={`text-accent transition-all duration-500`} size={22} />
            )}
          </div>

          <div className='w-full bg-card-bg-grey rounded-full h-1'>
            <div className='bg-accent h-1 rounded-full transition-all ease-out duration-500' style={{ width: `${step<3?'0%':'100%'}` }} />
          </div>

          <div className={`${step<3?'bg-card-bg-grey':step>3?'bg-accent bg-opacity-25':'bg-accent'} h-10 min-w-10 ml-1.5 flex items-center justify-center rounded-full transition-all duration-500`}>
            {step<=3 ? (
              <FaLandmark className={`${step<3?'text-txt-secondary':'text-black'} transition-all duration-500`} size={20} />
            ) : (
              <FaCheck className={`text-accent transition-all duration-500`} size={22} />
            )}
          </div>

        </div>
      </div>

      <div className='pt-40'>
        <button className='bg-gray-800 p-3 m-3' onClick={() => setStep(0)}>Step 0</button>
        <button className='bg-gray-800 p-3 m-3' onClick={() => setStep(1)}>Step 1</button>
        <button className='bg-gray-800 p-3 m-3' onClick={() => setStep(2)}>Step 2</button>
        <button className='bg-gray-800 p-3 m-3' onClick={() => setStep(3)}>Step 3</button>
        <button className='bg-gray-800 p-3 m-3' onClick={() => setStep(4)}>Step 4</button>
      </div>

    </div>
  );
}
