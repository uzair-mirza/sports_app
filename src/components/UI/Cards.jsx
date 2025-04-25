import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardData from '../../data/CardData.json'


function Cards() {
    const [count, setCount] = useState(0)
  return (
    <>
    {CardData.map((cards) => {
        const {id, title, description, img} = cards
        return (
            <div className="col-lg-4 mt-3">
                <Card key={id}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <p>Count {count}</p>
                        <Button variant="primary" className='me-2' onClick={() => setCount(count + 1)}>Add Item</Button>
                        <Button variant="primary" className='me-2' onClick={() => setCount(count > 0 ? count - 1 : 0)}>Remove Item</Button>
                        <Button variant="primary" onClick={() => setCount(0)}>Reset</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    } )}
    </>
  )
}

export default Cards
