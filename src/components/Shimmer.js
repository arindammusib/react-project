const Shimmer=()=>{
    return(
        <div className="my-8 mx-4 w-4/5 ">
      <div className="flex flex-wrap gap-8 justify-between ">
        {Array(16)
          .fill("")
          .map(( index) => {
            return (
              <div className=" w-60 h-96" key={index}>
                <div className="w-72 h-44 bg-gray-400 mb-3"></div>
                <div className="w-72 h-8 bg-gray-400 mb-3"></div>
                <div className="w-3/4 h-8 bg-gray-400 mb-3"></div>
                <div className="flex w-72 h-5 gap-2 justify-between">
                </div>
              </div>
            );
          })}
      </div>
    </div>
    )
}
export default Shimmer;