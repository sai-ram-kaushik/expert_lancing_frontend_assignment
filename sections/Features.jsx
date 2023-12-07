import { features } from "@/constants"
const Features = () => {
  return (
    <section className="w-full p-5">
        <div className="container mx-auto">
            <div className="flex items-center justify-center">
                <h3>Features of Healthi<span>mi</span> App</h3>
            </div>

            <div className="flex flex-wrap gap-20 items-center justify-center mt-16">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center gap-3">
                        <div>{feature.icon}</div>
                        <p className="text-2xl font-bold text-secondary">{feature.label}</p>
                        <p className="lg:w-[20rem] text-center text-lg">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Features