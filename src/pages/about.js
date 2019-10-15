import Layout from '../../components/Layout'
import Nav from '../../components/Nav'

import { createClient } from 'contentful'

const client = createClient({
    space: "7a7vm4iaa5sv",
    accessToken: "-KtfxbKPmrnL2o1J4BLXTU2LspmWF8pTbO1k5MAjPPc"
  });

const About = ({ menuItems }) => {
    return(<Layout>
         <Nav menuItems={menuItems} />
         <section className="bg-transparent bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url(/images/header.jpg)" }}>
            <div className="bg-grad-dark h-full">
                <div className="pt-24 lg:pt-32 pb-24 text-white px-8 lg:px-32">
                    <h1 className="text-4xl lg:text-6xl leading-tight font-bold pt-2">About Us</h1>
                </div>
            </div>
        </section>

        <section className="lg:px-20 px-4 pt-12 mb-18">
            <h1 className="text-center font-bold text-5xl lg:my-20 my-12">
                <span className="bg-pink-500 text-white px-2 mr-2">About </span>
                 Tech Growth 2022
            </h1>
            <div className="flex lg:flex-row flex-col justify-center">
                <div className="m-4">
                    <div className="text-center">
                        <i className="lni-users text-5xl text-pink-500"></i>
                        <h3 className="text-2xl font-bold mb-5">Great Speakers</h3>
                        <p>Dolor sit amet consectetur elit sed do eiusmod tempor incd idunt labore et dolore magna </p>
                    </div>
                </div>
                <div className="m-4">
                    <div className="text-center">
                        <i className="lni-coffee-cup text-5xl text-pink-500"></i>
                        <h3 className="text-2xl font-bold mb-5">Networking</h3>
                        <p>Dolor sit amet consectetur elit sed do eiusmod tempor incd idunt labore et dolore magna </p>
                    </div>
                </div>
                <div className="m-4">
                    <div className="text-center">
                        <i className="lni-briefcase text-5xl text-pink-500"></i>
                        <h3 className="text-2xl font-bold mb-5">Awesome Companies</h3>
                        <p>Dolor sit amet consectetur elit sed do eiusmod tempor incd idunt labore et dolore magna </p>
                    </div>
                </div>
                <div className="m-4">
                    <div className="text-center">
                        <i className="lni-bulb text-5xl text-pink-500"></i>
                        <h3 className="text-2xl font-bold mb-5">Knowledge</h3>
                        <p>Dolor sit amet consectetur elit sed do eiusmod tempor incd idunt labore et dolore magna </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="lg:px-20 px-4 pt-12 mb-24">
            <div className="flex lg:flex-row flex-col justify-around">
                <div className="m-4">
                    <div className="text-center  shadow-lg p-6">
                        <h2 className="text-6xl font-extrabold">57</h2>
                        <h3 className="text-2xl font-bold mb-5 text-pink-500">Speakers</h3>
                    </div>
                </div>
                <div className="m-4">
                    <div className="text-center shadow-lg p-6">
                        <h2 className="text-6xl font-extrabold">3</h2>
                        <h3 className="text-2xl font-bold mb-5 text-pink-500">Years</h3>
                    </div>
                </div>
                <div className="m-4 ">
                    <div className="text-center shadow-lg p-6">
                    <h2 className="text-6xl font-extrabold">2450</h2>
                        <h3 className="text-2xl font-bold mb-5 text-pink-500">Attendees</h3>
                        
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-transparent bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url(/images/event2.jpg)" }}>
            <div className="bg-grad-dark h-full">
                <div className="pt-24 lg:pt-32 pb-24 text-center text-white lg:px-32">
                    <h1 className="text-4xl lg:text-6xl leading-tight font-bold pt-2">Join us and see <br/> what is new in <span className="bg-pink-500 text-white px-2 mr-2">Tech!</span></h1>
                    <div className="mt-8">
                        <a href="#" className="rounded py-3 px-5 bg-pink-600 text-white hover:bg-pink-700 font-bold">Get Tickets</a>
                    </div>
                </div>
                
            </div>
        </section>
    </Layout>)
}

About.getInitialProps = async() => {

    const menu = await client.getEntry('YctVkGXoXFBwVT6Hpf4ih')

    const menuItems = menu.fields.menuItems

    return { menuItems }
}

export default About