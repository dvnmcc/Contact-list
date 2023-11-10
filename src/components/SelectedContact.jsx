import { useEffect, useState } from "react";

export default function selectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
const [contact, setContact] = useState(null);
useEffect(()=> {
    async function fetchSingleUser(){
        try{
            const res = await fetch(` https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        } const json = await res.json()
        console.log(json)
        setContact(json)
    }catch (err) {
        console.log(err)
    }
}
fetchSingleUser();
},
)

  return <div>Selected Contact</div>;
}
