import { Form, Button } from "react-bootstrap"

import { useState } from 'react'

import db from "../firebase"
import { collection, addDoc } from "@firebase/firestore"

const ContactForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    console.log(name, email, message);

    const handleSubmit = async(e) => {
        e.preventDefault()

        console.log("handleSubmit activated")

        //checks if empty
        if(name.lenght < 3){
            alert('The name can not be blank');
            return
        }
        if(email === ""){
            alert('Your email can not be blank');
            return
        }
        if(message.lenght < 5){
            alert('The message can not be blank');
            return
        }

        //send to db
        try{
            const docRef = await addDoc(collection(db, "contacts"), {
                client_name: name,
                client_email: email,
                client_message: message,
                created : new Date()
            })
        } catch (error){
            console.log(error)
        }
        //cleaner
        setName("")
        setEmail("")
        setMessage("")
    }


    return(
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="forText">
                    <Form.Label>Question</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
    )
}

export default ContactForm