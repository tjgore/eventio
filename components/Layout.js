import '../public/static/styles.css'
import Nav from './Nav'

const Layout = (props) => (
    
    <div className="text-gray-700 font-sans leading-relaxed">
        <Nav/>

        <link href="https://cdn.lineicons.com/1.0.1/LineIcons.min.css" rel="stylesheet"/>
        {props.children}
    </div>
)

export default Layout