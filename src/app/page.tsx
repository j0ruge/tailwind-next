export default function Home() {
  return (
    <div className="p-8 bg-slate-50 text-slate-900 h-screen
      flex flex-col items-center text-center
      dark:bg-slate-900 dark:text-slate-100      
    ">
      <div className="max-w-2xl">
        <h1 className="
          font-bold text-3xl flex items-center gap-3 
          before:w-0.5 
          sm:text-4xl
          lg:text-5xl
        ">Rapidly build modern websites without ever leaving your HTML.</h1>      
        <p className="mt-4
          dark:text-slate-400
        ">
          A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.</p>
        <button disabled className="
        bg-sky-500 px-4 py-2 rounded-md font-medium mt-4
        hover:bg-sky-600
        text-white
        
        dark:bg-sky-400 dark:text-sky-950
        ">
        Sign in
        </button>
      </div>
    </div>    
  );
}
  