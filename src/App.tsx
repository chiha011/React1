
import Button from "./components/ui/Button";

import ProdcutCard from "./components/ProdcutCard"
import Modal from "./components/ui/Modal";
import { productList } from "./data";
import {useState } from "react";



const App = () => {


/* STAATE*/
const [isOpen, setIsOpen] = useState(false);


/* Handler*/
function openModal() {
    setIsOpen(true);
}

function closeModal() {
    setIsOpen(false);
}

  //**renders */
  const renderProductList =productList.map(product => <ProdcutCard key={product.id} product={product}/>);


  return (
    <main className="container">  

<Button className="bg-yellow-400" onClick={openModal}>Add</Button>
      
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2  rounded-md">  
      {renderProductList}
      </div>

      <Modal isOpen={isOpen} closeModal={closeModal} title=" ADD A NEW PRODUCT ">
        <div className="flex items-center space-x-3">
        <Button className="bg-yellow-400">SUBMIT</Button>
        <Button className="bg-indigo-400 ">CANCEL</Button>
        </div>
        </Modal>
    </main>
    );
};

export default App;