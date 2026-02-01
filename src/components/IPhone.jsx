export default function IPhone({ children }) {
  return (
    <div className="relative">
      {/* Phone body */}
      <div className="w-[260px] h-[500px] rounded-[40px] bg-black p-2 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
        {/* Screen */}
        <div className="relative w-full h-full rounded-[32px] bg-[#f8fafc] overflow-hidden">
          {/* Dynamic island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20" />

          {/* App content */}
          <div className="pt-4 h-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
