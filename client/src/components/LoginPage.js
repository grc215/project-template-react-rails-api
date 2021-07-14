import React, {useState} from 'react'

export default function LoginPage(props) {

    const [formData, setFormData]=useState({
        name:'',
        password:''
        })
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
            
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({
            name: formData.name,
            password: formData.password
        })
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: formData.name,
                password: formData.password
            })
        })
        .then(res => res.json())
        .then(props.handleResponse)
        .then(res => console.log("login response", res))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" 
                name="name"
                placeholder="name" 
                value={formData.name} 
                onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input type="password"
                name="password" 
                placeholder="password"
                value={formData.password} 
                onChange={handleChange}/>
                <input type="submit" value="Log in"/>
            </form>
        </div>
    )
}
