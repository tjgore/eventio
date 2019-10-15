import Layout from '../../components/Layout'
import Nav from '../../components/Nav'

import { createClient } from 'contentful'

const client = createClient({
    space: "7a7vm4iaa5sv",
    accessToken: "-KtfxbKPmrnL2o1J4BLXTU2LspmWF8pTbO1k5MAjPPc"
  });

const Index = ({ menuItems, homePage }) => {

    return (<Layout>
         <Nav menuItems={menuItems} />
        <section className="bg-transparent bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${homePage.fields.backgroundImage.fields.file.url})` }}>
            <div className="bg-grad-dark h-full">
                <div className="pt-24 lg:pt-48 pb-56 text-white p-8 lg:px-32">
                    <h4 className="font-bold text-2xl text-pink-500">{homePage.fields.eventDate}</h4>
                    <h1 className="text-4xl lg:text-6xl leading-tight font-bold pt-2 pb-3 lg:w-1/2 w-full">{homePage.fields.headerText}</h1>
                    <h6 className="font-bold mb-4 lg:w-1/2 w-full">{homePage.fields.headerBody.content[0].content[0].value}</h6>
                    <div className="mt-8">
                        { homePage.fields.button ? ( <a href="#" className="rounded py-3 px-4 bg-pink-600 text-white hover:bg-pink-700 font-bold">{homePage.fields.buttonText}</a>) : null }
                    </div>
                </div>
            </div>
        </section>

        <section className="lg:mb-10 mb-6">
            <div className="flex justify-center lg:mx-32 bg-grad-pink relative text-white p-8 lg:rounded-lg top-5">
                <h1 className="lg:text-5xl text-xl absolute top-2 lg:inset-2 font-extrabold">{homePage.fields.countdownText} </h1>
                <div className="flex flex-col text-center leading-tight lg:pt-4">
                    <h5 className="lg:text-6xl text-3xl font-black">123</h5>
                    <p className="lg:text-lg text-sm font-medium">Days</p>
                </div>
                <span className="align-top lg:text-6xl lg:px-8 px-2">:</span>
                <div className="flex flex-col text-center leading-tight lg:pt-4">
                    <h5 className="lg:text-6xl text-3xl font-black">12</h5>
                    <p className="lg:text-lg text-sm font-medium">Hours</p>
                </div>
                <span className="align-top lg:text-6xl lg:px-8 px-2">:</span>
                <div className="flex flex-col text-center leading-tight lg:pt-4">
                    <h5 className="lg:text-6xl text-3xl font-black">02</h5>
                    <p className="lg:text-lg text-sm font-medium">Minutes</p>
                </div>
                <span className="align-top lg:text-6xl lg:px-8 px-2">:</span>
                <div className="flex flex-col text-center leading-tight lg:pt-4">
                    <h5 className="lg:text-6xl text-3xl font-black">37</h5>
                    <p className="lg:text-lg text-sm font-medium">Seconds</p>
                </div>
            </div>
        </section>

        <section className="lg:px-20 px-4 lg:py-12 flex lg:flex-row flex-col">
            <div className="w-full md:w-1/2 lg:pr-12 pr-0">
                <h1 className="text-3xl font-bold mb-3 lg:w-1/2 w-full">
                    <span className="bg-pink-500 text-white px-2">{ homePage.fields.aboutTitle.split(" ").shift() }</span> { homePage.fields.aboutTitle.substr(homePage.fields.aboutTitle.indexOf(" ") + 1) }
                </h1>
                {
                    homePage.fields.aboutBody.content.map((content, key) => (<p className="mb-4">{content.content[0].value}</p>) )
                }
            </div>
            <div className="w-full md:w-1/2 lg:pt-0 pt-10">
                <img src={homePage.fields.aboutImage.fields.file.url} alt="event" />
            </div>
        </section>

        <section className="lg:py-12 pt-12 flex flex-wrap">
            <div className="w-full lg:w-1/4 bg-cover bg-top bg-no-repeat" style={{ height: "350px", backgroundImage: "url(/images/speaker1.jpg)" }}>
                <div className="bg-grad-dark-300 hover:bg-grad-pink h-full p-6 text-white overflow-y-auto content">
                    <p className="text-pink-500">Microsoft</p>
                    <h4 className="text-2xl font-bold mb-2">Robera Thomas</h4>
                    <p className="text-sm leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/4 bg-cover bg-top bg-no-repeat" style={{ height: "350px", backgroundImage: "url(/images/speaker2.jpg)" }}>
                <div className="bg-grad-dark-300 h-full">
                <div className="bg-grad-dark-300 hover:bg-grad-pink h-full p-6 text-white overflow-y-auto content">
                    <p className="text-pink-500">Tencent</p>
                    <h4 className="text-2xl font-bold mb-2">Jack Henry</h4>
                    <p className="text-sm leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </p>
                </div>
                </div>
            </div>
            <div className="w-full lg:w-1/4 bg-cover bg-top bg-no-repeat" style={{ height: "350px", backgroundImage: "url(/images/speaker3.jpg)" }}>
                <div className="bg-grad-dark-300 h-full">
                <div className="bg-grad-dark-300 hover:bg-grad-pink h-full p-6 text-white overflow-y-auto content">
                    <p className="text-pink-500">Github</p>
                    <h4 className="text-2xl font-bold mb-2">Matthew Sands</h4>
                    <p className="text-sm leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, labore et dolore magna aliqua
                    </p>
                </div>
                </div>
            </div>
            <div className="w-full lg:w-1/4 bg-cover bg-top bg-no-repeat" style={{ height: "350px", backgroundImage: "url(/images/speaker4.jpg)" }}>
                <div className="bg-grad-dark-300 h-full">
                <div className="bg-grad-dark-300 hover:bg-grad-pink h-full p-6 text-white overflow-y-auto content">
                    <p className="text-pink-500">Amazon</p>
                    <h4 className="text-2xl font-bold mb-2">Sara Wills</h4>
                    <p className="text-sm leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                </div>
                </div>
            </div>
            <div className="w-full lg:w-1/4 bg-cover bg-top bg-no-repeat" style={{ height: "350px", backgroundImage: "url(/images/speaker5.jpg)" }}>
                <div className="bg-grad-dark-300 h-full">
                <div className="bg-grad-dark-300 hover:bg-grad-pink h-full p-6 text-white overflow-y-auto content">
                    <p className="text-pink-500">Slack</p>
                    <h4 className="text-2xl font-bold mb-2">Brit Sarna</h4>
                    <p className="text-sm leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, labore et dolore magna aliqua
                    </p>
                </div>
                </div>
            </div>
            <div className="w-full lg:w-1/4 bg-cover bg-top bg-no-repeat" style={{ height: "350px", backgroundImage: "url(/images/speaker6.jpg)" }}>
                <div className="bg-grad-dark-300 h-full">
                <div className="bg-grad-dark-300 hover:bg-grad-pink h-full p-6 text-white overflow-y-auto content">
                    <p className="text-pink-500">Basecamp</p>
                    <h4 className="text-2xl font-bold mb-2">Jessica Ruth</h4>
                    <p className="text-sm leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </p>
                </div>
                </div>
            </div>
            <div className="w-full lg:w-1/4 bg-cover bg-top bg-no-repeat" style={{ height: "350px", backgroundImage: "url(/images/speaker2.jpg)" }}>
                <div className="bg-grad-dark-300 h-full">
                <div className="bg-grad-dark-300 hover:bg-grad-pink h-full p-6 text-white overflow-y-auto content">
                    <p className="text-pink-500">Apple</p>
                    <h4 className="text-2xl font-bold mb-2">Marcus James</h4>
                    <p className="text-sm leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </p>
                </div>
                </div>
            </div>
            <div className="w-full lg:w-1/4 bg-cover bg-top bg-no-repeat" style={{ height: "350px", backgroundImage: "url(/images/speaker3.jpg)" }}>
                <div className="bg-grad-dark-300 h-full">
                <div className="bg-grad-dark-300 hover:bg-grad-pink h-full p-6 text-white overflow-y-auto content">
                    <p className="text-pink-500">Facebook</p>
                    <h4 className="text-2xl font-bold mb-2">Timmy Gore</h4>
                    <p className="text-sm leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, labore et dolore magna aliqua
                    </p>
                </div>
                </div>
            </div>
        </section>

    </Layout>)
}

Index.getInitialProps = async() => {

    const homePage = await client.getEntry('40PceDsQUNneCWAy7Bu0FO')
    const menu = await client.getEntry('YctVkGXoXFBwVT6Hpf4ih')

    const menuItems = menu.fields.menuItems

    return { menuItems, homePage }
}

export default Index
