import Layout from '../../components/Layout'
import Section from '../../components/Sections'

const PageContent = ({ page, points }) => {


    const Layouts = page[0].fields.pageSections.map(section => section.fields.layout[0])

    return (
        <>
            {
                Layouts.map((layout, index) => {

                    return (<Section 
                        key={index} 
                        layout={layout} 
                        content={page[0].fields.pageSections[index]} 
                        points={page[0].fields.pageSections[index].fields.contentList ? points : null} />)
                })
            }
        </>
    )
}

PageContent.getInitialProps = async ({ context, client }) => {

    const pageName = context.query.pageContent

    const pages = await client.getEntries({
        content_type: 'pages'
    })

    const points = await client.getEntries({
        content_type: 'points'
    })

    const page = pages.items.filter(page => page.fields.pageUrl === pageName)

    //console.log(page[0].fields.pageSections)
    //console.log(page[0].fields.pageSections[0].fields.layout[0])
    //console.log(page[0].fields.pageSections.map(section => section.fields.layout[0]))
    return { page, points }
}

export default Layout(PageContent)