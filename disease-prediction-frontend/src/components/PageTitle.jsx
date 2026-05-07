
function PageTitle({title,paragraph}){
    return(
        <div className="mb-5">
            <h1 className="flex justify-center text-xl font-mono">{title}</h1>
            <hr className="mx-auto w-1/2 my-1"/>
            <p className="flex justify-center italic">{paragraph}</p>
        </div>
    )
}
export default PageTitle