import React from 'react';


const LoadingModal = ({isOpen ,message}) => {

    if(!isOpen) return null
  return (
    
      <div
        
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-zinc-800/60 backdrop-blur-sm"
      >
        <div className="w-[20%] rounded-2xl border border-lime-300/10 bg-zinc-900 p-6 shadow-xl animate-modal">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 rounded-full border border-zinc-700 border-t-lime-600 animate-spin" />
            <h3 className="text-lg font-semibold text-zinc-300">Loading..</h3>
            <p className="text-center text-sm text-zinc-400">{message}</p>
          </div>
        </div>
      </div>
    
  );
};

export default LoadingModal;