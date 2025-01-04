/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { FaXmark } from 'react-icons/fa6';

export default function ImageModal({ modalVisible, setModalVisible, imageUrl }) {

  useEffect(() => {
    if(modalVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalVisible])

  if(!modalVisible) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-screen-bg-black bg-opacity-80 z-50"
      onClick={() => setModalVisible(false)}  
    >

      <button
        className="fixed top-8 right-8 bg-accent px-2 py-2 h-fit w-fit text-screen-bg-black rounded-lg shadow-lg hover:opacity-80 transition-all duration-300"
        onClick={() => setModalVisible(false)}
      ><FaXmark className='text-3xl' /></button>
      
      <div
        className="relative w-[90vw] xl:w-[70vw] flex justify-center items-center"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside image
      > 

        <img src={imageUrl} className="rounded-lg shadow-lg" />

      </div>
      
    </div>
  );
}
