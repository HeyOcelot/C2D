'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Bird, X, Share2, ExternalLink } from 'lucide-react'

// Custom SVG Icons for Wallpaper
const BabyBottle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-20">
    <path d="M9 16V9a3 3 0 0 1 6 0v7M10 5h4M12 2v3M9 16h6v3a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-3z" />
  </svg>
)

const Pacifier = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-20">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 9V5M9 5h6M12 15a4 4 0 1 0 0 8 4 4 0 1 0 0-8z" />
  </svg>
)

const TeddyBear = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-20">
    <circle cx="7" cy="7" r="3" />
    <circle cx="17" cy="7" r="3" />
    <path d="M12 10a5 5 0 1 0 0 10 5 5 0 1 0 0-10z" />
    <circle cx="12" cy="15" r="1.5" />
  </svg>
)

export default function NurseryLanding() {
  const [showConfirm, setShowConfirm] = useState(false)

  const bskyUrl = "https://bsky.app/profile/come2daddyprod.bsky.social"

  return (
    <main className="h-screen w-full relative bg-[#fdfbf7] overflow-hidden font-sans text-[#5A5A40]">
      {/* Background Frame Confirm / Modal */}
      <AnimatePresence>
        {showConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative p-[30px] shadow-2xl rounded-[35px] max-w-lg w-full overflow-hidden"
              style={{
                backgroundImage: "url('https://i.imgur.com/cjYjamz.png')",
                backgroundRepeat: "repeat",
              }}
            >
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] pointer-events-none rounded-[35px]" />
              <div className="bg-[#FFE282] p-8 rounded-[25px] ring-1 ring-gray-200 text-center relative flex flex-col items-center">
                <p className="text-xl text-[#5A5A40] mb-8 font-medium leading-relaxed">
                  Please be advised that you are now leaving to visit our JustFor.Fans profile. The following material depicts a fictional narrative in which adults engage in consensual age-play fantasy. <span className="font-bold text-[#DF08A1]">This content may only be viewed and heard by adults over the age of 18.</span>
                </p>
                
                <p className="text-2xl text-[#06849F] font-bold uppercase tracking-widest mb-10">
                  Would you like to continue?
                </p>

                <div className="flex gap-6 w-full justify-center">
                  <button 
                    onClick={() => setShowConfirm(false)}
                    className="flex-1 max-w-[140px] py-4 bg-[#EC42BA] text-white rounded-full font-black uppercase tracking-widest hover:bg-[#DF08A1] transition-all shadow-lg active:scale-95"
                  >
                    NO
                  </button>
                  <a 
                    href={bskyUrl}
                    target="_self"
                    rel="noopener noreferrer"
                    onClick={() => setShowConfirm(false)}
                    className="flex-1 max-w-[140px] py-4 bg-[#06849F] text-white rounded-full font-black uppercase tracking-widest hover:bg-[#056d83] transition-all shadow-lg active:scale-95 flex items-center justify-center"
                  >
                    YES
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {/* Wallpaper Pattern */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none bg-repeat" 
           style={{ 
             backgroundImage: `url('https://i.imgur.com/o7c9HAC.jpeg')`,
             backgroundSize: '627px' 
           }}>
      </div>

      {/* Header Wallpaper Border */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-[180px] z-10 overflow-hidden bg-repeat-x" 
           style={{ 
             backgroundImage: `url('https://i.imgur.com/y69dpty.png')`,
             backgroundSize: 'auto 180px' 
           }}>
      </div>

      {/* Centerpiece Frame Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-[4%] md:p-4 z-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative p-3 md:p-[34px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] rounded-[35px] w-full max-w-[94%] h-auto md:w-3/4 md:h-auto overflow-hidden flex flex-col"
          style={{
            backgroundImage: "url('https://i.imgur.com/cjYjamz.png')",
            backgroundRepeat: "repeat",
          }}
        >
          {/* Interior frame shadow overlay - darker as requested */}
          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] pointer-events-none rounded-[35px]" />
          
          {/* Inner Content Box */}
          <div className="bg-[#FFE282] p-0 ring-1 ring-gray-200 rounded-[25px] w-full h-full text-center relative flex flex-col items-center justify-between md:min-h-[440px]">
            {/* Logo Image */}
            {/* Logo Image */}
            <a 
              onClick={() => setShowConfirm(true)}
              className="p-8 pb-4 md:p-[50px] md:pb-6 flex justify-center w-full cursor-pointer hover:opacity-90 transition-opacity active:scale-95"
            >
               <img 
                 src="https://i.imgur.com/D4ODMrE.png" 
                 alt="Come2Daddy" 
                 className="w-full h-auto max-h-[120px] md:max-h-none object-contain"
               />
            </a>

            <p className="text-[1.35rem] md:text-4xl text-[#06849F] uppercase tracking-widest font-bold text-center mb-4 md:mb-8 px-4 md:px-12 leading-tight">
              ...and be your best little self!
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-8 mb-6 md:mb-8 text-sm md:text-sm font-semibold text-gray-800 px-4 md:px-12 w-full">
              <a 
                href="https://bsky.app/profile/come2daddyprod.bsky.social" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#DF08A1] active:bg-white/60 active:scale-95 transition-all cursor-pointer bg-white/40 md:bg-transparent p-3 md:p-0 rounded-xl w-full md:w-auto"
              >
                <svg viewBox="0 0 512 512" width="20" height="20" className="fill-current shrink-0">
                  <path d="M111.8 61.1C183.7 75.3 227.1 137.4 256 160c28.9-22.6 72.3-84.7 144.2-98.9c38.5-7.6 111.8 14.2 111.8 113.8c0 24.3-11.8 108.5-47.4 153.3c-39.6 49.7-90.7 46.1-125.1 40.1c-1.2-.2-2.3-.4-3.5-.6c-13.3-2.3-25-2.2-36 0c-1.2.2-2.3.4-3.5.6c-34.4 6-85.5 9.6-125.1-40.1C35.8 283.4 24 199.2 24 174.9c0-99.6 73.3-121.4 111.8-113.8z"/>
                </svg>
                <span className="truncate">@Come2DaddyProd.bsky.social</span>
              </a>
              <a 
                href="https://x.com/Come2DaddyProd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#DF08A1] active:bg-white/60 active:scale-95 transition-all cursor-pointer bg-white/40 md:bg-transparent p-3 md:p-0 rounded-xl w-full md:w-auto"
              >
                <X size={20} className="shrink-0" />
                <span className="truncate">@Come2DaddyProd</span>
              </a>
            </div>

            <div className="pt-2 md:pt-4 pb-8 md:pb-12 w-full flex justify-center px-6 md:px-12">
              <button 
                onClick={() => setShowConfirm(true)}
                className="text-lg md:text-[1.75rem] text-[#06849F] font-bold flex items-center group uppercase tracking-widest drop-shadow-sm transition-all hover:text-[#DF08A1] active:scale-95"
              >
                Hear from Daddy at JustFor.Fans!
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Vertical Spacer 2 (Bottom) */}
        <div className="hidden md:block md:flex-[2]" />
      </div>

      {/* Furniture: Crib (Bottom-Left) */}
      <div className="hidden md:block absolute bottom-0 left-0 z-10 pointer-events-none">
        <img 
          src="https://i.imgur.com/q4Iof99.png" 
          alt="Crib" 
          className="w-[25vw] h-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)]"
        />
      </div>

      {/* Furniture: Changing Table (Bottom-Right) */}
      <div className="hidden md:block absolute bottom-0 right-0 z-10 pointer-events-none">
        <img 
          src="https://i.imgur.com/YDwS78k.png" 
          alt="Changing Table" 
          className="w-[20vw] h-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)]"
        />
      </div>
    </main>
  )
}
