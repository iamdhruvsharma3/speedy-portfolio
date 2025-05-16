import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";

interface PageLoaderProps {
  isLoading: boolean;
}

const PageLoader: React.FC<PageLoaderProps> = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);
  const [animationData, setAnimationData] = useState<any>(null);

  // Load Lottie JSON from public folder
  useEffect(() => {
    fetch("/speedometer-loader.json")
      .then((res) => res.json())
      .then(setAnimationData)
      .catch((err) => console.error("Failed to load Lottie JSON", err));
  }, []);

  // Simulate loading progress
  useEffect(() => {
    if (isLoading) {
      setShowLoader(true);
      let startTime = Date.now();
      const duration = 1500;

      const timer = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const newProgress = Math.min(100, (elapsedTime / duration) * 100);
        setProgress(newProgress);

        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => setShowLoader(false), 300);
        }
      }, 30);

      return () => clearInterval(timer);
    } else {
      setTimeout(() => setShowLoader(false), 300);
    }
  }, [isLoading]);

  if (!showLoader || !animationData) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center
                  ${
                    !isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
                  } transition-opacity duration-500`}>
      <div className="w-64 h-64 flex items-center justify-center relative">
        <Lottie
          loop
          animationData={animationData}
          play
          style={{ width: 250, height: 250 }}
        />
      </div>
      <div className="w-64 h-2 bg-white/10 rounded-full mt-4 overflow-hidden">
        <div
          className="h-full bg-racing-red transition-all duration-300 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-racing-red mt-4 font-racing text-xl">LOADING...</p>
    </div>
  );
};

export default PageLoader;
