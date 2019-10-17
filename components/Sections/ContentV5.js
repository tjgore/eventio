
const ContentV5 = ({ content }) => {
    return (
        <>
            <section className="lg:px-20 px-6 lg:py-20 py-6 flex lg:flex-row flex-col">
            <div className="w-full md:w-1/2 lg:pr-12 pr-0 pt-10 lg:pt-0">
                    <p className="text-pink-500 font-bold">{content.fields.subtitle}</p>
                    <h1 className="lg:text-6xl text-4xl font-bold mb-3 leading-tight text-gray-800">
                    {content.fields.title}
                    </h1>
                    {
                        content.fields.body.content.map((content, key) => (<p key={key} className="mb-5">{content.content[0].value}</p>))
                    }
                </div>
                <div className="w-full md:w-1/2 lg:pt-0 pt-10 lg:pr-10">
                    <img src={content.fields.image.fields.file.url} alt="event" />
                </div>
            </section>
        </>)
}


export default ContentV5