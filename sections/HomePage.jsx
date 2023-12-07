import HomePageVector from '@/public/assets/homePageVector.svg'
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Image from 'next/image'
import ellipse from '@/public/assets/ellipse.svg'
import Button from '@/components/Button';
import TransitionEffect from '@/components/TransitionEffect';
const HomePage = () => {
    return (
        <section className="w-full h-[85vh] p-5 lg:p-0">
            <TransitionEffect />
            <Image src={ellipse} className='hidden lg:flex absolute top-0' />
            <div className="container mx-auto w-full h-full">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full h-full">
                    {/* Left side */}
                    <div className="flex flex-col items-center lg:items-start gap-3 lg:w-[45rem] ">
                        <h3 className='leading-[4.5rem] text-center lg:text-start z-[990]'>Tracking Health: Embracing Eco-Friendly Wellness</h3>
                        <p className='text-xl'>Discover a holistic approach to health with our innovative tracking app, seamlessly connecting to your smart gadgets. Embrace wellness through our eco-friendly ethos, as we minimize environmental impact with all-natural, organically made products and packaging. Experience modern functionality with a classic touch, making health tracking a sustainable and stylish journey.</p>
                        <div className='flex flex-col lg:flex-row items-center gap-8 mt-8'>
                            <Button className='flex items-center justify-center gap-3'>
                                <FaApple size={60} />
                                <div className='flex flex-col items-start'>
                                    <p>Available on the</p>
                                    <p>App Store</p>
                                </div>
                            </Button>

                            <Button className='flex items-center justify-center gap-3'>
                                <FaGooglePlay size={60} />
                                <div className='flex flex-col items-start'>
                                    <p>Get it on</p>
                                    <p>Google Play</p>
                                </div>
                            </Button>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div>
                        <Image src={HomePageVector} alt='homePageVector' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage