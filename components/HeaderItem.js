function HeaderItem({title, Icon}) {
    return (
        <div className="flex flex-col items-center group cursor-pointer hover:text-white w-14 sm:w-48">
            <Icon className="h-8 mb-1 group-hover:animate-bounce" />
            <p className="tracking-widest opacity-0 group-hover:opacity-100">{title}</p>
            
        </div>
    )
}

export default HeaderItem
