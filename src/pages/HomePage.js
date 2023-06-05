const HomePage = () => {
  return (
    <div>
      <main className="grid grid-cols-2">
        <div>
          <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_fbpbl0qw.json" background="transparent" speed="1" loop autoplay="true"></lottie-player>
        </div>
        <div className=" px-9 py-40">
          <h1 className="font-bold text-4xl  animate-pulse">Hi, I am John</h1>
          <h4 className="text-red-800 py-3">Some Dev, Freelancer, Rounder</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quos optio incidunt. Ab sapiente dolorem nam aut a deleniti quas magnam! Doloribus debitis modi quod fuga dicta reprehenderit, cum laborum dolor sapiente sed delectus aspernatur eius sint itaque rerum aut perspiciatis rem quisquam, voluptatibus labore mollitia sit. Eaque, explicabo quam!</p>
        </div>
      </main>
      <h6 className="text-center font-bold  text-4xl py-9"> Technologies I use</h6>
      <div className="grid grid-cols-4 my-5 gap-y-9 px-9">
        <i class="fa-brands fa-react fa-10x
        "></i>
        <i class="fa-brands fa-python fa-10x"></i>
        <i class="fa-brands fa-css3 fa-10x"></i>
        <i class="fa-brands fa-php fa-10x"></i>
        <i class="fa-brands fa-html5 fa-10x"></i>
        <i class="fa-brands fa-node fa-10x"></i>
      </div>
      <h1 className="text-center text-4xl  font-bold ">Who am i</h1>
      <div className="flex items-center  justify-center py-7  ">
        <div className="w-60 h-60 bg-black rounded-full  shadow-xl   text-center  py-16 text-white  text-sm border-4 border-green-800 ">
          <h1>Name:Some Person</h1>
          <h1>Email: someperson@gmail.com</h1>
          <h1>Tel:9777777</h1>
          <h1>Age:90</h1>
          <h1>Experience:html,css,javascript,react</h1>
        </div>
      </div>
      <div className="relative">
        <svg xmlns=" http://www.w3.org/2000/svg " viewBox="0 0 1440 320">
          <path fill="#000" fill-opacity="1" d="M0,288L1440,64L1440,320L0,320Z "></path>
        </svg>
        <div className="absolute bottom-0 text-white inset-x-5 top-[50%] flex justify-center flex-col items-center ">
          < h1 > Develop By</h1 >
          <h1>Some One Anonymous</h1>
        </div>
      </div >
    </div >
  )
}
export default HomePage