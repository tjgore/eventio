
const ContentV3 = ({ content, points }) => {

    const lists = content.fields.contentList.map((list, key) => points.items.filter(point => point.sys.id === list.sys.id))

    return (
        <>
            <section className="lg:px-20 px-6 lg:py-20 py-6">
                <h1 className="lg:text-5xl text-4xl font-bold leading-tight text-gray-800 w-full text-center m-auto lg:w-1/2">
                    {content.fields.title}
                </h1>
                <div className="h-1 bg-pink-500 w-32 m-auto mb-12"></div>

                <div className="flex lg:flex-row flex-col items-stretch">
                    <div className="flex flex-col m-5 lg:w-1/3 w-full lg:text-right text-left">
                        {
                            lists.slice(0, 2).map((list, key) => (
                                <div key={key} className=" mb-8">
                                    <i className={`${list[0].fields.iconName} text-4xl text-pink-500`}></i>
                                    <h4 className="text-xl font-bold mb-3">{list[0].fields.title}</h4>
                                    <p>
                                        {list[0].fields.body.content[0].content[0].value}
                                    </p>
                                </div>))
                        }
                    </div>
                    <div className="self-center flex flex-col m-5 lg:w-1/3 h-full w-full">
                        <img src={content.fields.image.fields.file.url} alt="event" className="shadow rounded" />
                    </div>
                    <div className="flex flex-col m-5 lg:w-1/3 w-full">
                        {
                            lists.slice(2, 4).map((list, key) => (
                                <div key={key} className="text-left mb-8">
                                    <i className={`${list[0].fields.iconName} text-4xl text-pink-500`}></i>
                                    <h4 className="text-xl font-bold mb-3">{list[0].fields.title}</h4>
                                    <p>
                                        {list[0].fields.body.content[0].content[0].value}
                                    </p>
                                </div>))
                        }
                    </div>
                </div>
            </section>
        </>)
}


export default ContentV3