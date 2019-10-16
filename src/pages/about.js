import Layout from '../../components/Layout'
import Link from 'next/link'

const About = ({ aboutPage }) => {
    return (
        <>
            <section className="bg-transparent bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${aboutPage.fields.backgroundImage.fields.file.url})` }}>
                <div className="bg-grad-dark h-full">
                    <div className="pt-24 lg:pt-32 pb-24 text-white px-8 lg:px-32">
                        <h1 className="text-4xl lg:text-6xl leading-tight font-bold pt-2">About Us</h1>
                    </div>
                </div>
            </section>

            <section className="lg:px-20 px-4 pt-12 mb-18">
                <h1 className="text-center font-bold text-5xl lg:my-20 my-12">
                    <span className="bg-pink-500 text-white px-2 mr-1">{aboutPage.fields.contentTitle.split(" ").shift()}</span> {aboutPage.fields.contentTitle.substr(aboutPage.fields.contentTitle.indexOf(" ") + 1)}
                </h1>
                <div className="flex lg:flex-row flex-col justify-center">
                    {aboutPage.fields.eventPoints.map((point, key) => (
                        <div key={key} className="m-4 lg:w-1/4 md:w-1/2 w-full">
                            <div className="text-center">
                                <i className={`${point.fields.iconName} text-5xl text-pink-500`}></i>
                                <h3 className="text-2xl font-bold mb-5">{point.fields.title}</h3>
                                <p>{point.fields.body.content[0].content[0].value} </p>
                            </div>
                        </div>
                    ))}

                </div>
            </section>

            <section className="lg:px-20 px-4 pt-12 mb-24">
                <div className="flex lg:flex-row flex-col justify-around">
                    {aboutPage.fields.stats.map((point, key) => (
                        <div key={key} className="m-4">
                            <div className="text-center  shadow-lg p-6">
                                <h2 className="text-6xl font-extrabold">{point.fields.title}</h2>
                                <h3 className="text-2xl font-bold mb-5 text-pink-500">{point.fields.body.content[0].content[0].value}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-transparent bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${aboutPage.fields.ctaBackgroundImage.fields.file.url})` }}>
                <div className="bg-grad-dark h-full">
                    <div className="pt-24 lg:pt-32 pb-24 text-center text-white lg:px-32">
                        <h1 className="text-4xl lg:text-6xl leading-tight font-bold pt-2 lg:w-3/4 w-full m-auto">
                            {aboutPage.fields.cta.substr(0, aboutPage.fields.cta.lastIndexOf(" "))}
                            <span className="bg-pink-500 text-white px-2 ml-2">
                                {aboutPage.fields.cta.split(" ").pop()}
                            </span>
                        </h1>
                        <div className="mt-8">
                            {
                                aboutPage.fields.ctaButton ? (<Link href="/ "><a className="rounded py-3 px-5 bg-pink-600 text-white hover:bg-pink-700 font-bold">{aboutPage.fields.buttonText}</a></Link>) : null
                            }
                        </div>
                    </div>

                </div>
            </section>
        </>)
}

About.getInitialProps = async ({ client }) => {
    const aboutPage = await client.getEntry('6lxzHxXcNqmyslKweMs1BN')

    console.log(aboutPage.fields.eventPoints[0].fields.body.content[0].content[0].value)
    return { aboutPage }
}

export default Layout(About)