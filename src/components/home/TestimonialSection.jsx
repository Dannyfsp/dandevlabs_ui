import TestimonialItem from "./TestimonialItem"

const Testimonials = [
    {
        img: './testimonial1.png',
        name: 'Amaka Adu',
        position: 'Product Manager at Finwest Africa',
        comment: 'We came to DandevLabs with a rough product idea. Their software consulting team helped us refine the vision, choose the right tech stack, and build a roadmap that actually made sense. Their clarity saved us months of trial and error.',
    },
    {
        img: './testimonial1.png',
        name: 'Amaka Adu',
        position: 'Product Manager at Finwest Africa',
        comment: 'We came to DandevLabs with a rough product idea. Their software consulting team helped us refine the vision, choose the right tech stack, and build a roadmap that actually made sense. Their clarity saved us months of trial and error.',
    },
    {
        img: './testimonial1.png',
        name: 'Amaka Adu',
        position: 'Product Manager at Finwest Africa',
        comment: 'We came to DandevLabs with a rough product idea. Their software consulting team helped us refine the vision, choose the right tech stack, and build a roadmap that actually made sense. Their clarity saved us months of trial and error.',
    },
    {
        img: './testimonial1.png',
        name: 'Amaka Adu',
        position: 'Product Manager at Finwest Africa',
        comment: 'We came to DandevLabs with a rough product idea. Their software consulting team helped us refine the vision, choose the right tech stack, and build a roadmap that actually made sense. Their clarity saved us months of trial and error.',
    },
]

export default function TestimonialSection() {
    return (
        <div className="font-lora xl:mx-[200px] sm:mx-[32px] mx-[16px] my-[50px] flex flex-col gap-8 py-6">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-0">
                    <div className="relative flex grow">
                        <p className="lg:text-[48px] text-[32px] font-semibold">Testimonials That</p>
                        <div className="absolute -top-2 left-[270px] lg:left-[410px]">
                            <img className="w-[28px] h-[28px]" src="./Vector1.png" alt="" />
                        </div>
                    </div>
                    <div><p className="lg:text-[48px] text-[32px] font-semibold">Speak to <span className="text-secondary">Our Results</span></p></div>
                </div>
                <div className="leading-7 text-[20px]">
                    Trusted by teams, startups, and entrepreneurs who value quality craftsmanship, strategic clarity, and measurable results. Our clients choose us not just for what we build — but how we think, collaborate, and deliver
                </div>
            </div>
            <div className="overflow-x-auto flex gap-4">
                {Testimonials.map((item, index) => (
                    <TestimonialItem key={index} img={item.img} name={item.name} position={item.position} comment={item.comment} />
                ))}
            </div>
        </div>
    )
}