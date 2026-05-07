function Card2({title,image,description}){
    return(
        <div className=" bg-white w-40 flex flex-wrap rounded-xl shadow-md my-5 p-1 hover:scale-90 transition-transform hover:shadow-lg ">
            <img className="h-auto w-18"src={image} />
            <h1 className="text-xs font-bold mt-4">{title}</h1>
            <p className="text-sm ml-5">{description}</p>
        </div>
    )
}

export default Card2