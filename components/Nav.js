import Link from 'next/link'

const Nav = ({ menuItems }) => {

    const toggleMenu = (id) => {
        document.querySelector(id).classList.toggle('hidden');
    }

    return (<nav className="shadow-lg lg:z-10 lg:fixed relative top-0 w-full bg-white flex lg:flex-row flex-col lg:pl-32 pt-6 lg:pb-4 pb-0">
        <div className="flex flex-row px-8 border-b lg:border-0 pb-4 lg:pb-0">
            <h1 className="text-3xl font-bold">
                <Link href="/">
                    <a>Event<span className="text-pink-500">io</span></a>
                </Link>
            </h1>
            <div className="ml-auto lg:hidden">
                <i className="lni-menu size-md border rounded px-2" onClick={() => toggleMenu("#menu")}></i>
            </div>
        </div>
        <div id="menu" className=" hidden block h-full w-full lg:h-auto lg:w-auto lg:flex lg:ml-auto pt-1">
            <ul className="font-bold pb-8 px-8 lg:p-0 text-lg">
                { menuItems.map((item, key) => {
                    return item.fields.type ?  
                    (<li key={key} className="block lg:inline-block mx-4 lg:my-0 lg:ml-6 ml-4 my-4 lg:my-0">
                    <Link href={item.fields.urlPath} as={item.fields.urlAs}>
                    <a className="rounded p-3 bg-pink-600 text-white hover:bg-pink-700">{item.fields.realName}</a>
                    </Link>
                </li>) :
                    (<li key={key} className="block lg:inline-block mx-4 lg:p-0 py-4">
                    <Link href={item.fields.urlPath} as={item.fields.urlAs}>
                        <a className="lg:hover:text-pink-500 cursor-pointer">{item.fields.realName}</a>
                    </Link>
                    </li>)
                })}
            </ul>

        </div>
    </nav>
    )
}

export default Nav