"use client";

function PageNotFound() {
     return (
          <>
               <div className="h-[70vh] flex justify-evenly items-center p-5 flex-wrap-reverse">
                    <div className="flex items-center flex-col ">
                         <div className="w-[50%]">{/* <LottieAnimation /> */}</div>
                         <div className="text-[1.3rem] font-dark font-bold">404 | Page Not Found 😥</div>
                         <p className="text-2xl md:text-3xl font-light leading-normal ">Sorry we could not find this page. </p>
                         <button
                              className="w-[50%] md:w-auto bg-[#fbc73d]/80 text-black font-semibold hover:bg-[#fbc73d] rounded-[16px] px-5 py-3"
                              onClick={() => {
                                   window.location.href = "/";
                              }}
                         >
                              Go to Home
                         </button>
                    </div>
               </div>
          </>
     );
}

export default PageNotFound;
