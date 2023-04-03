import { useState, useEffect } from 'react'

import db from "../firebase"
import { collection, getDocs } from "@firebase/firestore"

import { Table } from 'react-bootstrap';

const Question = () => {
    
    const [questions, setQuestion] = useState([]);

    //get the questions from the db
    const getDataFromFirestore = async () => {
        const querySnapshot = await getDocs(collection(db, "contacts"));
        const tempQuestion = querySnapshot.docs.map((doc) => (
            {
                id: doc.id,
                ...doc.data()
            }));
            console.log(tempQuestion)
        setQuestion(tempQuestion);
    }
    //useEffect, checks when the function is used
    useEffect(() => {
        getDataFromFirestore()
    }, []);
    console.log(questions)

    return(
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Question</th>
                </tr>
            </thead>
            <tbody>
                {
                    questions.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.client_name}</td>
                                <td>{item.client_email}</td>
                                <td>{item.client_message}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}

export default Question