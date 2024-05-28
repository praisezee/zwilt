import screening from "../assets/screening.png"
import useMainContext from "../hook/useMainContext";

const WorkProcess = () =>
{
  const process = [
    {
      img loading="lazy": screening,
      step: 1,
      heading: "Resume Screening",
      body: "We thoroughly review each candidate's resume to ensure they meet our high standards."
    },
    {
      img loading="lazy": screening,
      step: 2,
      heading: "Technical Interview",
      body: "Candidates undergo a rigorous technical interview to assess their skills and expertise."
    },
    {
      img loading="lazy": screening,
      step: 3,
      heading: "HR Interview",
      body: "Our HR team conducts interviews to evaluate candidates' cultural fit and soft skills."
    },
    {
      img loading="lazy": screening,
      step: 4,
      heading: "Final Approval",
      body: "Candidates are reviewed and approved by our senior management team."
    },
    {
      img loading="lazy": screening,
      step: 5,
      heading: "Onboarding",
      body: "We provide a comprehensive onboarding process to help new hires integrate smoothly."
    }
  ]
  const { accordionNumber, setAccordionNumber } = useMainContext()
  const toggle = (item) =>
  {
    const index = process.indexOf(item)
    if (accordionNumber === index) return setAccordionNumber(null)
    setAccordionNumber(index)
  }
  return (
    <section className="relative pt-10 bg-white">
      <section className="absolute top-0 left-0 w-full h-48  transform -skew-y-3 origin-top-left z-10 bg-[#fefefe]" />
      <section className="relative bg-transparent mx-auto w-11/12 md:5/6 lg:5/6 px-5 md:px-10 z-10 flex flex-col md:flex-row justify-center items-center py-32 mt-20">
        <article className="w-full md:w-1/2">
          <p className="mt-5 font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
            How we ensure you’re
            <br/>
              in good hands.
          </p>
          <p className="my-5 text-sm md:text-base lg:text-lg">
            With our comprehensive screening process, we hand-pick highly
            <br />
            skilled candidates so you can onboard them in a matter of days.
          </p>
          { process.map( item => (
            <div key={process.indexOf(item)} className="flex flex-col gap-3 mt-1 rounded-sm border border-gray-100 py-2 px-5 cursor-pointer bg-white shadow-lg w-full max-w-[500px]" >
            <div className="flex items-center gap-3" role="button" onClick={()=>toggle(item)}>
              <div className={accordionNumber === process.indexOf(item) ? "flex justify-center items-center p-4 rounded-full bg-[#8ba4fd]" : "flex justify-center items-center p-4 rounded-full"} >
                <img loading="lazy" className="h-3" src={item.img loading="lazy"} alt="" />
              </div>
              <div>
                <strong>
                  Step {item.step}:
                </strong>
                {item.heading}
              </div>
            </div>
            <div className={accordionNumber === process.indexOf(item) ? "text-xs mt-1" : "hidden"}>
              {item.body}
            </div>
          </div>
          ))}
        </article>
        <article className="w-full md:w-1/2 mt-10 md:mt-0"/>
      </section>
    </section>
  )
}

export default WorkProcess
