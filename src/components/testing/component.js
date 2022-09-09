import { useEffect } from "react";
import { useState } from "react";
import { getCustomers, getCustomersByID, postLogin, POSTrequest } from "./test";

function Customers() {

    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState([]);

    // useEffect(() => {
    //     async function getData() {
    //         setCustomers(await getCustomers())
    //         setCustomer(await POSTrequest())
    //     }
    //     getData()
    // }, [])


    async function handleLogin(e) {
        e.preventDefault()
        const validUser = await postLogin(data)
        console.log(validUser);
    }

    function handleData(e) {
        const inputName = e.target.name
        data[inputName] = e.target.value
        setData({ ...data })
    }

    const [data, setData] = useState({})

    return (
        <form>
            <span>Email: </span><input type={'text'} name={'email'} onBlur={handleData}></input>
            <span>Password: </span><input type={'text'} name={'password'} onBlur={handleData}></input>
            <button onClick={handleLogin}>CLICK</button>
        </form>
    )
}

export default Customers