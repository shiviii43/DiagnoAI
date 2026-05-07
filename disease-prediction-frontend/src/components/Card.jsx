
function Card({title,image,description}){
    return (
        <div className=" bg-white shadow-md w-50 rounded-xl p-4 m-3 hover:scale-115 transition-transform hover:shadow-lg">
            <h1 className=" flex justify-center text-sm font-bold">{title}</h1>
            <img  className=" ml-4 h-25 w-35"src={image} />
            <p className="flex justify-center text-xs">{description}</p>
        </div>
    )
}
export default Card