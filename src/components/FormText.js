import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from "react";

export default function FormText(props) {
    const [text, setText] = useState('Enter text here');

    const handleOnChange =(event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const lowerDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const boldClick = () =>{
        let newText = text.bold()
        setText(newText);
    }
    const clearClick = () =>{
        let newText = ('')
        setText(newText);
    }

    // setText('Kindly enter your text here');
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Text</Form.Label>
                    <Form.Control as="textarea" value={text} onChange={handleOnChange} rows={8} />
                </Form.Group>
                <Button variant="primary" onClick={clearClick}>Clear text </Button>{' '}
                <Button variant="primary" onClick={handleUpClick}>Convert to uppercase</Button>{' '}
                <Button variant="primary" onClick={lowerDownClick}>Convert to lowercase</Button>{' '}
                <Button variant="primary" onClick={boldClick}>Make text BOLD</Button>{' '}

            </div>

            <div className="container">
                <h1>Your text summary here</h1>
                <p>{text.split(" ").length} words, {text.length} characters.</p>
                <p>A slow reader will take {0.008 * text.split(" ").length * 60} seconds to read the entered text.</p>
                <p>While on an average {0.0032 * text.split(" ").length * 60} seconds are required to read the entered
                    text.</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </>
    );
}

