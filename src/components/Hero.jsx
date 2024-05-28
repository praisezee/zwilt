import useMainContext from "../hook/useMainContext";
import gif from "../assets/image.png"
import touch from "../assets/touch.png"
import hr from "../assets/hr.png"

const Hero = () =>
{
  const {search, handleSearchState, toggleHero,setToggleHero} = useMainContext()
  return (
    <section>
      <article className="flex w-full flex-col items-center my-8 md:my-20 justify-center">
        <div className="mb-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            Find the right fit
            <img src={ gif } alt="avtr" className="inline-block h-5 w-8 lg:h-10 lg:w-16 md:w-10 md:h-6"/>
            has
            <br />
            never been easier.
          </h1>
        </div>
        <p className="mb-6 text-sm w-11/12 md:w-96 text-center whitespace-normal">
          With our rigorous pre-vetting process, you&lsquo;ll never have to worry about finding the ideal candidate ever again 
        </p>
        <div className="relative border rounded-md flex items-center mt-5 max-w-3xl mx-auto w-96">
          <input type="text" className="w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-400 input-style" value={search} onChange={(e)=>handleSearchState(e)} />
            <div className={!search ? "absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500": "hidden"}>
            <span className="font-bold">Looking for</span> design |
          </div>
            <button className="absolute right-0 text-white p-2 rounded-md flex items-center justify-center h-10 px-3 bg-yellow-500" /* style="background-color: rgb(255, 190, 46);" */>
            <img src={touch} alt="Search Icon" height="15" width="15"/>
            </button>
        </div>
      </article>
      <article className="flex justify-center items-center">
        <article className="p-5 rounded-lg w-full md:w-3/5 bg-[#f8f8f8]">
          <div className="flex flex-wrap justify-between rounded-lg mb-4 mx-auto bg-[#d2d2d2] size">
            <button className={!toggleHero ? "px-5 py-1 rounded-lg w-1/2 bg-[#c7f4c2]" :"px-5 py-1 rounded-lg w-1/2 bg-[#d2d2d2]" } onClick={()=>{setToggleHero(false)}}>IT & Development</button>
            <button className={toggleHero ? "px-5 py-1 rounded-lg w-1/2 bg-[#c7f4c2]" :"px-5 py-1 rounded-lg w-1/2 bg-[#d2d2d2]" } onClick={()=>{setToggleHero(true)}}>Deasign and Creative</button>
          </div>
          { !toggleHero ? (
            <div className="mt-3 mx-auto flex justify-center">
              <div className="flex flex-wrap justify-between w-full max-w-3xl">
                <div className="w-full md:w-1/3 px-2">
                  <p className="text-left mt-3 text-[#959595]">Python Developer</p>
                  <p className="text-left mt-3 text-[#959595]">Shopify Developer</p>
                  <p className="text-left mt-3 text-[#000] font-bold">MERN Stack Developer</p>
                  <p className="text-left mt-3 text-[#959595]">Full Stack Developer</p>
                </div>
                <div className="w-full md:w-1/3 px-2">
                  <p className="text-left mt-3 text-[#959595]">Data Scientist</p>
                  <p className="text-left mt-3 text-[#959595]">Front End Developer</p>
                  <p className="text-left mt-3 text-[#959595]">Shopify Developer</p>
                  <p className="text-left mt-3 text-[#959595]">Python Developer</p>
                </div>
                <div className="w-full md:w-1/3 px-2">
                  <p className="text-left mt-3 text-[#959595]">Shopify Developer</p>
                  <p className="text-left mt-3 text-[#959595]">Python Developer</p>
                  <p className="text-left mt-3 text-[#959595]">Full Stack Developer</p>
                  <p className="text-left mt-3 text-[#000000] font-bold">Explore More</p>
                </div>
              </div>
            </div>
          ) : (
              <div className="mt-3 mx-auto flex justify-center">
                <div className="flex flex-wrap justify-between w-full max-w-3xl">
                  <div className="w-full md:w-1/3 px-2">
                    <p className="text-left mt-3 text-[#959595]">Graphics Designer</p>
                    <p className="text-left mt-3 text-[#959595]">Videographer</p>
                    <p className="text-left mt-3 text-[#959595]">3D Artist</p>
                  </div>
                  <div className="w-full md:w-1/3 px-2">
                    <p className="text-left mt-3 text-[#959595]">UI/UX Designer</p>
                    <p className="text-left mt-3 text-[#959595]">Photographer</p>
                    <p className="text-left mt-3 text-[#959595]">Content Writer</p>
                  </div>
                  <div className="w-full md:w-1/3 px-2">
                    <p className="text-left mt-3 text-[#959595]">Animator</p>
                    <p className="text-left mt-3 text-[#959595]">Video Editor</p>
                    <p className="text-left mt-3 text-[#959595]">Illustrator</p>
                  </div>
                </div>
              </div>
          )}
        </article>
      </article>
      <img src={hr} alt="Horizontal rule" className="mt-20"/>
    </section>
  )
}

export default Hero
