
const HeaderV1 = ({ content }) => {
    return (
        <>
           <section className="bg-transparent bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${content.fields.image.fields.file.url})` }}>
                <div className="bg-grad-dark h-full">
                    <div className="pt-24 lg:pt-48 pb-48 text-white text-center p-8 lg:px-32">
                        <h4 className="font-bold text-2xl text-pink-500">{content.fields.subtitle}</h4>
                        <h1 className="text-4xl lg:text-6xl leading-tight font-bold pt-2 pb-3 ">{content.fields.title}</h1>
                        <h6 className="font-bold mb-4">{content.fields.body ?content.fields.body.content[0].content[0].value : null}</h6>
                        <div className="mt-12">
                            { content.fields.buttonOneText ? (<a href="#" className="rounded py-3 px-4 bg-pink-600 text-white hover:bg-pink-700 font-bold m-3">{content.fields.buttonOneText}</a>) :null }
                            { content.fields.buttonTwoText ? (<a href="#" className="rounded py-2 px-4 border-4 border-white text-white hover:border-gray-300 font-bold m-3">{content.fields.buttonTwoText}</a>) : null }
                        </div>
                    </div>
                </div>
            </section>
        </>)
}


export default HeaderV1