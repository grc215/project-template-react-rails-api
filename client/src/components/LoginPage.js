import React, {useState} from 'react'
import {Card, Form, Button} from 'semantic-ui-react'

export default function LoginPage(props) {

    const [formData, setFormData]=useState({
        name:'',
        password:''
        })
    
    const handleChange = (e) => {
        e.preventDefault()
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
        <div className='login'>
            <Card >
                <h1>Log in</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Field>
                        <label>Name</label>
                        <input 
                            type='text' 
                            name='name' 
                            placeholder='Name' 
                            value={formData.name} 
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input 
                            placeholder="Password" 
                            name='password' 
                            type='password' 
                            value={formData.password} 
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <br />
                    <Button type='submit'>Submit</Button>
                </Form>
            </Card>
        </div>
    )
}
