
const ContentV2 = ({ content }) => {
    return (
        <>
            <section className="lg:px-20 px-6 lg:py-20 py-6 flex lg:flex-row flex-col">
                <div className="w-full lg:pr-12 pr-0 pt-10 lg:pt-0">
                    <h1 className="lg:text-6xl text-4xl font-bold leading-tight text-gray-800">
                        {content.fields.title}
                    </h1>
                    <p className="text-pink-500 font-bold mb-5">{content.fields.subtitle}</p>
                   
                    {
                        content.fields.body.content.map((content, key) => (<p key={key} className="mb-5">{content.content[0].value}</p>))
                    }
                </div>
            </section>
        </>)
}


export default ContentV2