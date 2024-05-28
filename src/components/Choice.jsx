import bullet from "../assets/bullet.png"
import touchLight from "../assets/touchLight.png"
import choice from "../assets/choice.png"


const Choice = () =>
{
  const points = ["We pick the best for you to select.","Thousands of vetted candidates in dozens of categories.","Risk-free resource swapping for the best fit."]
  return (
    <section className="mx-auto py-48 px-8 sm:px-16 lg:px-32 relative mb-10 flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
          Why choose
          <br/>
          Zwilt?
        </p>
        <p className="mt-4 text-sm lg:text-base lg:w-1/3">
          We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.
        </p>
      </div>
      <div className="w-full lg:w-4/6 flex flex-col lg:flex-row items-center justify-between relative lg:absolute lg:right-0 px-10 lg:px-12 rounded-lg py-8 lg:py-12 overflow-hidden bg-white shadow-md">
        <div className="lg:w-1/2">
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug">
            Onboard without
            <br />
            the risk.
          </p>
          <div className="flex flex-col gap-2 mt-4 text-sm">
            { points.map( point => (
              <div key={points.indexOf(point)} className="flex gap-2 items-center">
                <img className="w-4 h-2" src={bullet} alt="bullet point" />
                <span>{ point }</span>
              </div>
              ))}
          </div>
          <div className="flex gap-3 items-center mt-5">
            <div className="flex justify-center items-center rounded-full overflow-hidden bg-black h-10 w-10">
              <img className="h-4 w-4" src={touchLight} alt="favicon" />
            </div>
            <span className="font-bold text-sm">Join Now</span>
          </div>
        </div>
        <img className="h-48 lg:h-96 mt-4 lg:mt-0" src={choice} alt="Onboard without risk" />
      </div>
    </section>
  )
}

export default Choice
