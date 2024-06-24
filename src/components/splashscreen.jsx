import "./sp.css"

function SplashScreen() {
  return (
    <div className="flex items-center justify-center h-screen ">
      {/* Custom Loader */}
      <div className="loader text-black relative overflow-hidden border-r-4 border-white w-0 animate-typewriter">
      
        <span className="loader-text text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-indigo-600 font-bold text-4xl">
          Developer,Curator,Vibes
        </span>
      </div>
    </div>
  );
}

export default SplashScreen;