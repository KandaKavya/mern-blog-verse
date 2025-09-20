const ProductCard=()=>{
    return(
        <div className="border-5 border-black w-[350px] flex flex-col items-center gap-10 py-4 rounded-3xl bg-amber-100">
            <img src="vite.svg" alt="Sample" className="w-[150px] h-[150px] border-dotted border-4 border-black rounded-full bg-blue-200"/>
            <div className="flex flex-col items-center gap-5">
                <h2 className="font-bold text-4xl text-blue-500">Product 1</h2>
                <p className="text-xl text-gray-600 text-center">This is the sample product for sample usage</p>
                <p className="font-bold text-2xl text-blue-300">$34.35</p>
            </div>
            <button className="bg-blue-300 text-black w-[60%] p-y-4 rounded-2xl cursor-pointer hover:bg-blue-500">Add to Cart</button>
        </div>
    )
}
export default ProductCard