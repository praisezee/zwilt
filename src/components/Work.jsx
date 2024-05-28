import person from "../assets/person2.png"
import grove from "../assets/grove.png"
import touchLeft from "../assets/touchLeft.png"
import groveLight from "../assets/groveLight.png"

const Work = () => {
  return (
    <section className="relative mt-[-10] bg-black">
      <article className="absolute top-0 left-0 w-full h-48  transform -skew-y-3 origin-top-left z-10 bg-black" />
      <article className="relative mx-auto w-11/12 md:5/6 lg:5/6 px-5 md:px-10 z-10 flex flex-col md:flex-row justify-center items-center py-16 lg:py-32 mt-20 text-white">
        <article className="w-full md:w-1/2">
          <article>
            <p className="text-3xl md:text-4xl font-bold leading-tight-mb-3">How it worked</p>
            <div className="flex items-center mb-3">
              <span className="mr-2">For Jason</span>
              <img loading="lazy" src={person} alt="avtr" className="mr-2 h-4 w-5 lg:h-10 lg:w-10 md:h-6 md:w-6" />
              <span>at</span>
            </div>
            <div>
              <img loading="lazy" src={grove} alt="" className="w-32 md:w-40 lg:w-48 mt-5" />
            </div>
          </article>
          <p className="mt-5 text-gray-400">
            Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since.
          </p>
          <article className="flex gap-3 items-center mt-8 md:mt-12">
            <div className="flex justify-center items-center rounded-full overflow-hidden bg-white h-12 w-12">
              <img loading="lazy" className="h-4 w-4" src={ touchLeft } alt="" />
            </div>
            <div className="flex justify-center items-center rounded-full overflow-hidden bg-white h-12 w-12"><img loading="lazy" className="h-4 w-4 transform rotate-180" src={touchLeft} alt=""/>
            </div>
          </article>
        </article>
        <article className="w-full md:w-1/2 mt-10 md:mt-0">
          <article className="mx-auto text-center md:text-left">
            <div className="flex items-center justify-center md:2/3 md:gap-5 md:pl-16 md:justify-start mb-5">
              <div className="company-image py-5 px-2 w-16 h-16 flex justify-center items-center" >
                <img loading="lazy" src={groveLight} alt="" />
              </div>
              <div>
                <div className="text-white font-bold">
                  Jason Makki
                </div>
                <div className="text-xs text-gray-300 mt-1">
                  <div className="position">
                    Engineer at GROOVE
                  </div>
                  <div className="location">
                    San Francisco
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mt-5 whitespace-normal md:w-2/3 mx-auto">
              Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they’ve been heavy hitters.
            </p>
          </article>
        </article>
      </article>
    </section>
  )
}

export default Work
