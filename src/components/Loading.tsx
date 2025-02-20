export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="relative">
        {/* Animated gradient ring */}
        <div className="w-16 h-16 rounded-full border-4 border-transparent animate-spin"
          style={{
            backgroundImage: 'linear-gradient(transparent, transparent), linear-gradient(90deg, #00cda0 0%, #00b3ff 50.5%, #fe00f8 100%)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'content-box, border-box',
          }}
        ></div>
        
        {/* HUGO text in the center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-sm font-bold">
            HUGO
          </span>
        </div>
      </div>
      
      {/* Loading text below */}
      <div className="absolute mt-24 text-white text-sm animate-pulse">
        Loading...
      </div>
    </div>
  );
}