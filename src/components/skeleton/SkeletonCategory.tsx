const SkeletonCategory = () => (
  <div className="w-full h-[80px] flex items-center justify-between p-2 rounded-lg bg-gray-200 animate-pulse">
    <div className="flex items-center gap-3">
      <div className="w-[60px] h-[60px] rounded-full bg-gray-300"></div>
      <div className="flex flex-col gap-1">
        <div className="w-32 h-4 bg-gray-300 rounded"></div>
        <div className="w-20 h-3 bg-gray-300 rounded"></div>
      </div>
    </div>
    <div className="border-l border-gray-300 px-2 text-center">
      <div className="w-10 h-4 bg-gray-300 rounded mb-1"></div>
      <div className="w-16 h-3 bg-gray-300 rounded"></div>
    </div>
  </div>
);
export default SkeletonCategory;
