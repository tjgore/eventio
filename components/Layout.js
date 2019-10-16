import '../public/static/styles.css'
import { createClient } from 'contentful'
import Nav from './Nav'

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

const Layout = Page => {
    const page = props => (
        <div className="text-gray-700 font-sans leading-relaxed">
            <link href="https://cdn.lineicons.com/1.0.1/LineIcons.min.css" rel="stylesheet" />
            <Nav menuItems={props.menuItems} />
            <Page {...props} />
        </div>
    )

    page.getInitialProps = async context => {
        const menu = await client.getEntry('YctVkGXoXFBwVT6Hpf4ih')

        const menuItems = menu.fields.menuItems

        return {
            menuItems,
            ...(Page.getInitialProps ? await Page.getInitialProps({ context, client }) : {})
        }
    }

    return page
}

export default Layout
