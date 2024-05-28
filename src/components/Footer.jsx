import touchLight from "../assets/touchLight.png"
import logo from "../assets/logo1.png"

const Footer = () => {
  return (
    <footer className="relative pt-10 mt-[80px] bg-[#0c0c0c]">
      <article className="absolute top-0 left-0 w-full h-48  transform -skew-y-3 origin-top-left z-10 bg-[#0c0c0c]" />
      <article className="mx-auto w-5/6 relative mt-10">
        <article className="relative z-10 mx-auto w-full px-10 flex items-center justify-center pt-20 pb-5 mt-20 bg-[#525aa0]">
          <article className="flex flex-col justify-center items-center">
            <p className="font-bold text-center text-white text-[2rem]" style={ { lineHeight: 1.3 } }>
              Need a job done
              <br />
              well? Get Started
            </p>
            <div className="flex gap-3 items-center rounded-full overflow-hidden justify-center bg-black h-11 w-11">
              <img loading="lazy" src={touchLight} alt="" className="h-2 w-3 rotate-90" />
            </div>
          </article>
        </article>
        <article className="flex flex-col md:flex-row gap-8 w-full mx-auto mt-20 text-white">
          <div className="w-full md:w-2/6">
            <img loading="lazy" src={ logo } alt="logo" className="h-8" />
            <p className="mt-5 text-gray-300">
              We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.
            </p>
            <div className="mt-10">
              <p className="text-gray-400">LINKS AND REDITECTS</p>
              <div className="flex gap-5 mt-3">
                <button className="px-8 py-2 text-xs rounded-lg bg-[#292b34]">
                  Hire Now
                </button>
                <button className="px-8 py-2 text-xs rounded-lg bg-[#292b34]">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/6">
            <p className="text-white font-bold text-[2.5rem]" style={{ lineHeight: 1.3 }}>
              Connecting the right people to
              <br/>
              the right businesses.
            </p>
            <div className="flex flex-col md:flex-row gap-5 md:gap-28 mt-20">
              <div className="flex flex-col gap-5">
                <p className="text-gray-400">
                  PLATFORM
                </p>
                <p>
                  Find Work
                </p>
                <p>
                  Find Talent
                </p>
                <p>
                  Categories
                </p>
                <p>
                  About Us
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-gray-400">
                  CATEGORIES
                </p>
                <p>
                  Data Science
                </p>
                <p>
                  IT &amp; Networking
                </p>
                <p>
                  Web &amp; Mobile
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-gray-400">
                  HELP
                </p>
                <p>
                  FAQ&lsquo;s
                </p>
                <p>
                  Contact Us
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-gray-400">
                  GET IN TOUCH
                </p>
                <p>
                  Instagram
                </p>
                <p>
                  LinkedIn
                </p>
                <p>
                  Twitter
                </p>
              </div>
            </div>
          </div>
        </article>
      </article>
      <hr className="mt-8 border-[#767679]" />
      <div className="w-5/6 mt-3 pb-3 flex flex-col md:flex-row justify-between mx-auto text-gray-300">
        <p>All rights reserved by Zwilt</p>
        <div className="flex gap-5">
          <p className="underline">
            Privacy Policy
          </p>
          <p className="underline">
            Terms and Conditions
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
