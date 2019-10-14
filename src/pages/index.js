import Layout from '../../components/Layout'

const Index = () => {

    return (<Layout>
        <section className="bg-transparent bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url(/images/header.jpg)" }}>
            <div className="bg-grad-dark h-full">
                <div className="pt-24 lg:pt-48 pb-56 text-white p-8 lg:px-32">
                    <h4 className="font-bold text-2xl text-pink-500">June 12, 2022</h4>
                    <h1 className="text-4xl lg:text-6xl leading-tight font-bold pt-2 pb-3">Tech Digital <br /> Conference 2022</h1>
                    <h6 className="font-bold mb-4">Curabitur non luctus lorem. Cras tincidunt <br /> nisi eget elit commodo, a fringilla est hendreri.</h6>
                    <div className="mt-8">
                        <a href="#" className="rounded py-3 px-4 bg-pink-600 text-white hover:bg-pink-700 font-bold">Get Tickets</a>
                    </div>
                </div>
            </div>
        </section>

        <section className="lg:mb-10 mb-6">
            <div className="flex justify-center lg:mx-32 bg-grad-pink relative text-white p-8 lg:rounded-lg top-5">
                <h1 className="lg:text-5xl text-xl absolute top-2 lg:inset-2 font-extrabold">Counting Every Minute! </h1>
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
                <h1 className="text-3xl font-bold mb-3">
                    <span className="bg-pink-500 text-white px-2">About</span> the <br /> Tech Conference
            </h1>
                <p>
                    Exhibz is produced by the team behind Metl Summit and Fiver Collision two
                    of the largest and fastest growing education conferences.
            <br /><br />
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <br /><br />
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
            <div className="w-full md:w-1/2 lg:pt-0 pt-10">
                <img src="/images/event.png" alt="event" />
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

export default Index