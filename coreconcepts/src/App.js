import {useState} from 'react';

function App(){
  const [products, setProducts] =useState([
    {id:1, title:'black-senakers', quantity:1},
    {id:2, title:'red T-shirt', quantity:1},
    {id:3, title:'blue jeans', quantity:1},
  ]);

  const [selectedId, setSelectedId] = useState(null);

  const selectedProduct = products.find((p)=>p.id===selectedId)

  const handleChoose = (id)=>{
    setSelectedId(id);
  }

  const increment = (id)=>{
    setProducts((prev)=>{
      return prev.map((product)=>{
        if(product.id===id){
          return {...product,  quantity:product.quantity+1};
        }else {
          return product;
        }
      })
    })
  }
  return (
    <div>
      <h2>All Products</h2>
      {products.map((product)=>(
        <div key={product.id}>
          {product.title}
          <button onClick={()=>handleChoose(product.id)}>Choose</button>

          <div>
            <button>-</button>
            <span>{product.quantity}</span>
            <button onClick={()=>increment(product.id)}>+</button>
          </div>
        </div>
      ))}

      <h2>Selected Products</h2>
      <span>{selectedProduct?.title}</span>
      <span>{selectedProduct?.quantity}</span>
    </div>
  )
}
export default App;