import { Col } from "react-bootstrap";
import { Form } from 'react-bootstrap'
import { Row } from 'react-bootstrap'

export default function ScoopOptions({ name, imagePath, updateItemCount }) {
	const handleChange = e => {
		updateItemCount(name, e.target.value)
	}

  return (
    <Col xs={12} sm={6} md={4} style={{ textAlign: "center" }}>
      <img
        width="75%"
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
      />
			<Form.Group controlId={`${name}--count`} as={Row} style={{ marginTop: '10px'}}>
				<Form.Label column xs="6" style={{ textAlign: 'right'}}>{name}</Form.Label>
				<Col xs="5" style={{ textAlign: "left"}}>
					<Form.Control
						type="number"
						onChange={handleChange}
						defaultValue={0}/>
				</Col>
			</Form.Group>
    </Col>
  );
}
