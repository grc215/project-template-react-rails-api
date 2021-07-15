import React, {useState} from 'react'
import {Card, Form, Button} from 'semantic-ui-react'

export default function SignupPage(props) {

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
        fetch("/users", {
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
        .then(alert("Registered successfully"))
    }

    return (
        <div className='login'>
            <Card >
            <h1>Register</h1>
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
                    <Button type='submit'>Submit</Button>
                </Form>
            </Card>
        </div>
    )
}
