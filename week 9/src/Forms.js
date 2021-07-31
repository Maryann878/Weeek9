import React, {useState} from 'react'
import axios from 'axios'
export default function Forms() {

    const[input, setInput]= useState({
        Firstname: '',
      email: '',
    });
    const handleSubmit = (event)=> {
        event.preventDefault();
        if(input.Firsatname && input.email){
            alert('Thank you' + input.Firstname);
        }else{alert('Please fill the form correctly');}
     
    }
const handleChange = (e)=> {
    console.log(e.target.value)
    setInput({...input, [e.target.name]: e.target.value})
    console.log(input);
}

    return (
        <div>
            <form>
            <input
             type="text" 
style={{border: '2px solid red'}}
onChange={(e)=> handleChange(e)}
value= {input.name}
placeholder="Firstname"
name =""
/>

<input
 type="email" 
style={{border: '2px solid red'}}
onChange={(e)=> handleChange(e)}
value= {input.name}
placeholder="email"
name =""
/>
</form>
<button onClick = {handleSubmit}>Submit</button>
        </div>
    )
}
