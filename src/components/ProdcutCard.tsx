import { IProduct } from "../interfaces"
import { txtSlicer } from "../utilis/functions";
import Image from "./Image"
import Button from "./ui/Button"

interface IProps{
    product:IProduct;
}

const ProdcutCard = ({product}: IProps) => {
    const{title,description,imageURL,price, category}=product
return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
        

        <Image imageURL={imageURL}
        alt={product.category.name} className="rounded-md mb-2 max-h-40"
        />
    
        <h3 className="text-lg font-semibold">{title}</h3>
        <p>
        {txtSlicer(description)}
        </p>

    <div className="flex items-center my-4 space-x-2 ">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
    </div>

    <div className="flex items-center justify-between">
        <span className="text-lg text-indigo-600 font-semibold">{price}$</span>
        <Image imageURL={category.imageURL}
        alt={category.name} 
        className="w-10 h-10 rounded-full object-bottom"
        />
    </div>
    
    <div className="flex items-center justify-between space-x-2">
    <Button className="bg-indigo-800 hover:bg-indigo-800 ">EDIT</Button>
    <Button className=" bg-red-800 hover:bg-indigo-800 ">DELETE</Button>
    
    </div>


    </div>
    )
}

export default ProdcutCard