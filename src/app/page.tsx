export default function Home() {
  return (
    <div className="p-8 bg-slate-50 text-slate-900 h-screen
      flex flex-col items-center
    ">
      <h1 className="
        font-bold text-3xl flex items-center gap-3 
        before:w-0.5 before:h-8 before:bg-sky-500
        sm:text-5xl
        lg:text-6xl
      ">Rapidly build modern websites without ever leaving your HTML.</h1>      
      <p>A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</p>
      <button disabled className="
       bg-sky-500 px-4 py-2 rounded-md font-medium mt-4
       enabled:hover:bg-sky-600
       disabled:opacity-60 disabled:cursor-not-allowed
       ">
       Sign in
      </button>
    </div>    
  );
}
  