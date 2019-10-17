import Layout from '../../components/Layout'
import Link from 'next/link'

const Sections = () => {
    return (
        <>
            <section className="bg-transparent bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url(/images/event2.jpg)" }}>
                <div className="bg-grad-dark h-full">
                    <div className="pt-24 lg:pt-32 pb-24 text-white px-8 lg:px-32">
                        <h1 className="text-4xl lg:text-6xl leading-tight font-bold pt-2">Page Sections</h1>
                    </div>
                </div>
            </section>

            <h1 className="text-center mt-24 p-4 font-bold border-2">Content v1</h1>
            <section className="lg:px-20 px-6 lg:py-20 py-6 flex lg:flex-row flex-col">
                <div className="w-full md:w-1/2 lg:pt-0 pt-10 lg:pr-10">
                    <img src="/images/event3.jpg" alt="event" className="shadow" />
                </div>
                <div className="w-full md:w-1/2 lg:pr-12 pr-0 pt-10 lg:pt-0">
                    <p className="text-pink-500 font-bold">Enjoy The Experience</p>
                    <h1 className="lg:text-6xl text-4xl font-bold mb-3 leading-tight text-gray-800">
                        Be awesome and Creative!
                    </h1>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    </p>
                </div>
            </section>

            <h1 className="text-center mt-16 p-4 font-bold border-2">Content v2</h1>
            <section className="lg:px-20 px-6 lg:py-20 py-6 flex lg:flex-row flex-col">
                <div className="w-full lg:pr-12 pr-0 pt-10 lg:pt-0">
                    <h1 className="lg:text-6xl text-4xl font-bold leading-tight text-gray-800">
                        Be awesome and Creative!
                    </h1>
                    <p className="text-pink-500 font-bold mb-5">Enjoy the experience quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
                    <p className="mb-5">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    </p>
                    <p className="mb-5">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    </p>
                </div>
            </section>

            <h1 className="text-center mt-16 p-4 font-bold border-2">Content v3</h1>
            <section className="lg:px-20 px-6 lg:py-20 py-6">
                <h1 className="lg:text-5xl text-4xl font-bold leading-tight text-gray-800 w-full text-center m-auto lg:w-1/2">
                    About the Tech Growth Conference
                </h1>
                <div className="h-1 bg-pink-500 w-32 m-auto mb-12"></div>

                <div className="flex lg:flex-row flex-col items-stretch">
                    <div className="flex flex-col m-5 lg:w-1/3 w-full lg:text-right text-left">
                        <div className=" mb-8">
                            <i className="lni-grow text-4xl text-pink-500"></i>
                            <h4 className="text-xl font-bold mb-3">Networking</h4>
                            <p>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis duis</p>
                        </div>
                        <div className="mb-9">
                            <i className="lni-cup text-4xl text-pink-500"></i>
                            <h4 className="text-xl font-bold mb-3">Having Fun</h4>
                            <p>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis duis</p>
                        </div>
                    </div>
                    <div className="self-center flex flex-col m-5 lg:w-1/3 h-full w-full">
                        <img src="/images/event4.jpg" alt="event" className="shadow rounded" />
                    </div>
                    <div className="flex flex-col m-5 lg:w-1/3 w-full">
                        <div className="text-left mb-8">
                            <i className="lni-crown text-4xl text-pink-500"></i>
                            <h4 className="text-xl font-bold mb-3">Teamwork</h4>
                            <p>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis duis</p>
                        </div>
                        <div className="text-left mb-8">
                            <i className="lni-code-alt text-4xl text-pink-500"></i>
                            <h4 className="text-xl font-bold mb-3">Awesome</h4>
                            <p>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis duis</p>
                        </div>
                    </div>
                </div>
            </section>

            <h1 className="text-center mt-16 p-4 font-bold border-2">Content v4</h1>
            <section className="lg:px-20 px-6 lg:py-20 py-6 flex lg:flex-row flex-col">
                <div className="w-full lg:pr-12 pr-0 pt-10 lg:pt-0">
                    <div className="text-center">
                        <h1 className="lg:text-6xl text-4xl font-bold leading-tight text-gray-800">
                            Be awesome and Creative!
                        </h1>
                        <p className="text-pink-500 font-bold mb-5">Enjoy the experience quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea </p>
                        <img src="/images/event3.jpg" className="h-64 m-auto mb-8"/>
                    </div>

                    <p className="mb-5">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    </p>
                    <p className="mb-5">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    </p>
                </div>
            </section>

            <h1 className="text-center mt-24 p-4 font-bold border-2">Content v5</h1>
            <section className="lg:px-20 px-6 lg:py-20 py-6 flex lg:flex-row flex-col">
            <div className="w-full md:w-1/2 lg:pr-12 pr-0 pt-10 lg:pt-0">
                    <p className="text-pink-500 font-bold">Enjoy The Experience</p>
                    <h1 className="lg:text-6xl text-4xl font-bold mb-3 leading-tight text-gray-800">
                        Be awesome and Creative!
                    </h1>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    </p>
                </div>
                <div className="w-full md:w-1/2 lg:pt-0 pt-10 lg:pr-10">
                    <img src="/images/event3.jpg" alt="event" className="shadow" />
                </div>
            </section>

            <h1 className="text-center mt-24 p-4 font-bold border-2">Header v1</h1>
            <section className="bg-transparent bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url(/images/event4.jpg)" }}>
                <div className="bg-grad-dark h-full">
                    <div className="pt-24 lg:pt-48 pb-48 text-white text-center p-8 lg:px-32">
                        <h4 className="font-bold text-2xl text-pink-500">December 22, 2023</h4>
                        <h1 className="text-4xl lg:text-6xl leading-tight font-bold pt-2 pb-3 ">Come Experience The Latest in Tech Around The World</h1>
                        <h6 className="font-bold mb-4">You haven't seen it all until you attend. Come join us and have fun</h6>
                        <div className="mt-12">
                           <a href="#" className="rounded py-3 px-4 bg-pink-600 text-white hover:bg-pink-700 font-bold m-3">Learn More!</a>
                           <a href="#" className="rounded py-2 px-4 border-4 border-white text-white hover:border-gray-300 font-bold m-3">Get Tickets!</a>
                        </div>
                    </div>
                </div>
            </section>

            <h1 className="text-center mt-24 p-4 font-bold border-2">Header v2</h1>
            <section className="bg-transparent bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url(/images/event4.jpg)" }}>
                <div className="bg-grad-pink h-full">
                    <div className="pt-24 lg:pt-48 pb-48 text-white text-center p-8 lg:px-32">
                        <h4 className="font-bold w-64 m-auto text-2xl text-pink-500 bg-white">December 22, 2023</h4>
                        <h1 className="text-4xl lg:text-6xl leading-tight font-bold pt-2 pb-3 ">Come Experience The Latest in Tech Around The World</h1>
                        <h6 className="font-bold mb-4">You haven't seen it all until you attend. Come join us and have fun</h6>
                        <div className="mt-12">
                           
                           <a href="#" className="rounded py-2 px-4 border-4 border-white text-white hover:border-gray-300 font-bold m-3">Get Tickets!</a>
                        </div>
                    </div>
                </div>
            </section>
        </>)
}

export default Layout(Sections)