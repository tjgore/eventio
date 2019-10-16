import Layout from '../../components/Layout'
import Countdown from 'react-countdown-now';


const Index = ({ homePage, speakers }) => {

    const renderer = ({ days, hours, minutes, seconds }) => {

        return (
            <>
                <div className="flex flex-col text-center leading-tight lg:pt-4">
                    <h5 className="lg:text-6xl text-3xl font-black">{('0' + days).slice(-3)}</h5>
                    <p className="lg:text-lg text-sm font-medium">Days</p>
                </div>
                <span className="align-top lg:text-6xl lg:px-8 px-2">:</span>
                <div className="flex flex-col text-center leading-tight lg:pt-4">
                    <h5 className="lg:text-6xl text-3xl font-black">{('0' + hours).slice(-2)}</h5>
                    <p className="lg:text-lg text-sm font-medium">Hours</p>
                </div>
                <span className="align-top lg:text-6xl lg:px-8 px-2">:</span>
                <div className="flex flex-col text-center leading-tight lg:pt-4">
                    <h5 className="lg:text-6xl text-3xl font-black">{('0' + minutes).slice(-2)}</h5>
                    <p className="lg:text-lg text-sm font-medium">Minutes</p>
                </div>
                <span className="align-top lg:text-6xl lg:px-8 px-2">:</span>
                <div className="flex flex-col text-center leading-tight lg:pt-4">
                    <h5 className="lg:text-6xl text-3xl font-black">{('0' + seconds).slice(-2)}</h5>
                    <p className="lg:text-lg text-sm font-medium">Seconds</p>
                </div>
            </>
        )
    };

    return (
        <>
            <section className="bg-transparent bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${homePage.fields.backgroundImage.fields.file.url})` }}>
                <div className="bg-grad-dark h-full">
                    <div className="pt-24 lg:pt-48 pb-56 text-white p-8 lg:px-32">
                        <h4 className="font-bold text-2xl text-pink-500">{homePage.fields.eventDate}</h4>
                        <h1 className="text-4xl lg:text-6xl leading-tight font-bold pt-2 pb-3 lg:w-1/2 w-full">{homePage.fields.headerText}</h1>
                        <h6 className="font-bold mb-4 lg:w-1/2 w-full">{homePage.fields.headerBody.content[0].content[0].value}</h6>
                        <div className="mt-8">
                            {homePage.fields.button ? (<a href="#" className="rounded py-3 px-4 bg-pink-600 text-white hover:bg-pink-700 font-bold">{homePage.fields.buttonText}</a>) : null}
                        </div>
                    </div>
                </div>
            </section>

            <section className="lg:mb-10 mb-6">
                <div className="flex justify-center lg:mx-32 bg-grad-pink relative text-white p-8 lg:rounded-lg top-5">
                    <h1 className="lg:text-5xl text-xl absolute top-2 lg:inset-2 font-extrabold">{homePage.fields.countdownText} </h1>
                    <Countdown
                        date={new Date(homePage.fields.countdownTimer)}
                        renderer={renderer}
                    />
                </div>
            </section>

            <section className="lg:px-20 px-4 lg:py-12 flex lg:flex-row flex-col">
                <div className="w-full md:w-1/2 lg:pr-12 pr-0">
                    <h1 className="text-3xl font-bold mb-3 lg:w-1/2 w-full">
                        <span className="bg-pink-500 text-white px-2">{homePage.fields.aboutTitle.split(" ").shift()}</span> {homePage.fields.aboutTitle.substr(homePage.fields.aboutTitle.indexOf(" ") + 1)}
                    </h1>
                    {
                        homePage.fields.aboutBody.content.map((content, key) => (<p key={key} className="mb-4">{content.content[0].value}</p>))
                    }
                </div>
                <div className="w-full md:w-1/2 lg:pt-0 pt-10">
                    <img src={homePage.fields.aboutImage.fields.file.url} alt="event" />
                </div>
            </section>

            <section className="lg:py-12 pt-12 flex flex-wrap">
                {speakers.items.map((speaker, key) => (
                    <div key={key} className="w-full lg:w-1/4 bg-cover bg-top bg-no-repeat" style={{ height: "350px", backgroundImage: `url(${speaker.fields.backgroundImage.fields.file.url})` }}>
                        <div className="bg-grad-dark-300 hover:bg-grad-pink h-full p-6 text-white overflow-y-auto content">
                            <p className="text-pink-500">{speaker.fields.company}</p>
                            <h4 className="text-2xl font-bold mb-2">{speaker.fields.name}</h4>
                            <p className="text-sm leading-loose">
                                {speaker.fields.bio.content[0].content[0].value}
                            </p>
                        </div>
                    </div>
                ))}
            </section>
        </>)
}

Index.getInitialProps = async ({ client }) => {

    const homePage = await client.getEntry('40PceDsQUNneCWAy7Bu0FO')

    const speakers = await client.getEntries({
        content_type: 'speakers'
    })

    return { homePage, speakers }
}

export default Layout(Index)
