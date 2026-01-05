
export const SkeletonFilterBar = () => {
   return (
      <div className="h-20 grid grid-cols-1 md:grid-cols-4 items-center rounded z-20 gap-1 px-4" >
         <div className="bg-gray-300 animate-pulse h-9" />
         <div className="bg-gray-300 animate-pulse h-9" />
         <div className="bg-gray-300 animate-pulse h-9" />
         <div className="bg-foreground animate-pulse h-9" />
      </div>
  )
}
