'use client';

type src = {
  src: string;
}


import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

export default function VideoBlock({src}: src)  {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}> 
        <img src="videoComponentImages/image.png" alt="Youtube Preview for video" className="h-45 w-80"/>
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