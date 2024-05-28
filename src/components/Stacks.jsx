import skills from "../assets/skills.png"
import category from "../assets/category.png"
import profile from "../assets/profile.png"
import shopify from "../assets/shopify.png"
import magneto from "../assets/magneto.png"
import datascience from "../assets/datascience.png"
import webflow from "../assets/webflow.png"
import touch from "../assets/touch.png"
import touchLight from "../assets/touchLight.png"
import figma from "../assets/figma.png"
import graphics from "../assets/graphics.png"
import illustrator from "../assets/illustrator.png"
import unreal from "../assets/unreal.png"
import cinema from "../assets/cinema.png"
import dotnet from "../assets/dotnet.png"

const Stacks = () =>
{
  const itStacks = [
    {
      name: "Shopify Developer",
      img: shopify
    },
    {
      name: "Magneto Developer",
      img: magneto
    },
    {
      name: "Data Scientist",
      img: datascience
    },
    {
      name: "Webflow Developer",
      img: webflow
    },
    {
      name: "Dot Net Developer",
      img: dotnet
    },
    {
      name: "",
      img: touch
    }
  ]

  const designStack = [
    {
      name: "",
      img: touch
    },
    {
      name: "UX designer",
      img: figma
    },
    {
      name: "Graphics Designer",
      img: graphics
    },
    {
      name: "Illustration Artist",
      img: illustrator
    },
    {
      name: "Unreal Engine",
      img: unreal
    }
    ,
    {
      name: "Cinema 4D",
      img: cinema
    }
  ]
  return (
    <section className="relative -m-9">
      <article className="absolute top-0 left-0 w-full h-48  transform -skew-y-3 origin-top-left z-0 bg-[#edefff]" />
      <article className="relative z-10 flex flex-col items-center justify-center py-16 mt-20 bg-[#edefff]">
        <p className="mt-6 text-center text-2l font-bold md:text-3xl lg:text-4xl leading-tight">
          Your one-stop marketplace for 
          <br />
          finding the talent your business needs.
        </p>
        <article className="w-11/12 md:w-5/6 lg:w-5/6 px-5 md:px-10 lg:gap-16 mt-10 flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="text-base md:text-lg lg:text-xl mb-5 font-bold">
              Find Dev and IT professionals to
              <br />
              scale your business.
            </div>
            <div className="flex gap-10 md:gap-20">
              <div className="flex items-center text-xs">
                <span className="mr-3">
                  <img loading="lazy" className="h-4 w-4" src={skills} alt="Skills for hire" />
                </span>
                989 Skills
              </div>
              <div className="flex items-center text-xs">
                <span className="mr-3">
                  <img loading="lazy" className="h-4 w-4" src={category} alt="Skills for hire" />
                </span>
                45 Sub-Categories
              </div>
            </div>
            <div className="flex items-center text-xs mt-5">
                <span className="mr-3">
                  <img loading="lazy" className="h-4 w-4" src={profile} alt="Skills for hire" />
                </span>
                3000 Profiles
              </div>
          </div>
          <div className="w-full md:1/2 lg:w-full bg-white px-5 py-3 rounded-md">
            <p className="font-bold md:text-left text-center">IT & Development</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-5">
              { itStacks.map( stack => (
                <div key={itStacks.indexOf(stack)} className="flex flex-col items-center">
                  <div className="flex items-center justify-center rounded-full overflow-hidden bg-gray-200 h-20 w-20">
                    <img loading="lazy" src={stack.img} alt="" className="h-8 w-8" />
                  </div>
                  <p className="text-center text-xs whitespace-normal w-12 mt-2">{ stack.name }</p>
                </div>
              ))}
            </div>
          </div>
        </article>
        <article className="w-11/12 md:w-5/6 lg:w-5/6 px-5 md:px-10 lg:gap-16 mt-10 flex flex-col md:flex-row justify-center items-center pb-16">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="text-base md:text-lg lg:text-xl mb-5 font-bold">
              Explore Creative individual with a
              <br />
              keen eye for details
            </div>
            <div className="flex gap-10 md:gap-20">
              <div className="flex items-center text-xs">
                <span className="mr-3">
                  <img loading="lazy" className="h-4 w-4" src={skills} alt="Skills for hire" />
                </span>
                989 Skills
              </div>
              <div className="flex items-center text-xs">
                <span className="mr-3">
                  <img loading="lazy" className="h-4 w-4" src={category} alt="Skills for hire" />
                </span>
                45 Sub-Categories
              </div>
            </div>
            <div className="flex items-center text-xs mt-5">
                <span className="mr-3">
                  <img loading="lazy" className="h-4 w-4" src={profile} alt="Skills for hire" />
                </span>
                3000 Profiles
              </div>
          </div>
          <div className="w-full md:1/2 lg:w-full bg-white px-5 py-3 rounded-md">
            <p className="font-bold md:text-left text-center">Design & Creative</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-5">
              { designStack.map( stack => (
                <div key={designStack.indexOf(stack)} className="flex flex-col items-center">
                  <div className="flex items-center justify-center rounded-full overflow-hidden bg-gray-200 h-20 w-20">
                    <img loading="lazy" src={stack.img} alt="" className={designStack.indexOf(stack) === 0 ? "h-8 w-8 rotate-180" :"h-8 w-8"} />
                  </div>
                  <p className="text-center text-xs whitespace-normal w-12 mt-2 ">{ stack.name }</p>
                </div>
              ))}
            </div>
          </div>
        </article>
        <article className="w-11/12 md:w-5/6 lg:w-5/6 lg:mt-20 px-5 md:px-10 flex flex-col md:flex-row justify-between items-center pb-16 -m-24">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center mb-10 md:mb-0">
            <div className="flex items-center mt-14">
              <div className="flex justify-center items-center rounded-full overflow-hidden bg-black h-16 w-16">
                <img loading="lazy" className="h-5 w-5 lg:h-4 lg:w-4 md:h-4 md:w-4" src={ touchLight } alt="" />
              </div>
              <span className="ml-3 font-bold">Explore More</span>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <span className="font-bold">30 more</span> to explore
          </div>
        </article>
      </article>
      <br />
      <br />
    </section>
  )
}

export default Stacks
