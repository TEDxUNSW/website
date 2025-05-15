'use client';

export type src = {
  src: string;
  titleImg: string;
  title: string;
}


import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

export default function VideoBlock({src, titleImg, title}: src)  {
  let [isOpen, setIsOpen] = useState(false)

  let srcImg: string = 'videoComponentImages/' + titleImg; 

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="relative"> 
        <img src={srcImg} alt="Youtube Preview for video" className="h-45 w-80"/>
        <div className="flex bg-black/60 absolute bottom-0 w-80 h-13 text-start">
          <div className="w-2"></div>
          <div>
          <p className="line-clamp-2">
            {title}
          </p>
          </div>
        </div>
      </button>
      
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50"> 
        <div className="fixed inset-0 flex w-full items-center justify-center" >
          <DialogPanel className="w-full h-full border bg-black/90 p-12" onClick={() => setIsOpen(false)}>
            <div className ="flex w-screen h-screen justify-center justify-self-center">
              <iframe src={src} className="h-4/5 w-4/5" allow="autoplay"/>
            </div>
          </DialogPanel>
        </div>
      </Dialog>     
    </>
  );
}
