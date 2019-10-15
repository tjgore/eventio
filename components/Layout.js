import '../public/static/styles.css'

const Layout = (props) => (
    
    <div className="text-gray-700 font-sans leading-relaxed">

        <link href="https://cdn.lineicons.com/1.0.1/LineIcons.min.css" rel="stylesheet"/>
        {props.children}
    </div>
)

export default Layout