import { useState, useEffect } from "react";
import Form from "./Form";
import Table from "./Table";

function App() {

  const API_URL = 'https://jsonplaceholder.typicode.com/'

  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]); 

  useEffect(()=>{

    const fetchItems = async () => {
      try{
        const response = await fetch( `${API_URL}${reqType}`); //reqType : users, comments or posts
        if(!response.ok) throw Error('Did not receive expected data');      
        const data = await response.json();
        console.log(data);
        setItems(data);
      }catch(err){
        console.log(err.message);
      }
    }

    fetchItems();

  }, [reqType]) //for load time: anytime the request type is changed



  return (
    <div className="App">
     <Form reqType={reqType} setReqType={setReqType} />
     {/* {<List items={items} />} */}
     <Table items={items}/>
    </div>
  );
}

export default App;
