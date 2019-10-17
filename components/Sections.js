import ContentV1 from './Sections/ContentV1'
import ContentV2 from './Sections/ContentV2'
import ContentV3 from './Sections/ContentV3'
import ContentV4 from './Sections/ContentV4'
import ContentV5 from './Sections/ContentV5'
import HeaderV1 from './Sections/HeaderV1'
import HeaderV2 from './Sections/HeaderV2'

const Section = ({layout, content, points}) => {
    
    let component = null

    switch (layout) {
        case 'ContentV1':
            component = (<ContentV1 content={content}/>)
        break

        case 'ContentV2':
            component = (<ContentV2 content={content}/>)
        break

        case 'ContentV3':
            component = (<ContentV3 content={content} points={points} />)
        break

        case 'ContentV4':
            component = (<ContentV4 content={content}/>)
        break

        case 'ContentV5':
            component = (<ContentV5 content={content}/>)
        break

        case 'HeaderV1':
            component = (<HeaderV1 content={content}/>)
        break

        case 'HeaderV2':
            component = (<HeaderV2 content={content}/>)
        break
        
        default:
            component = null
    }
    
    return (
        <>
        {component}
        </>
    )
}

export default Section