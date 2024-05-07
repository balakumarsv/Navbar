import { useState } from "react";
import { Card, CardGroup } from "react-bootstrap";

function Client() {
    const [data, setData] = useState([
        {
            photo:"https://previews.123rf.com/images/yupiramos/yupiramos1705/yupiramos170514532/77987159-young-man-profile-icon-vector-illustration-graphic-design.jpg",
            clientName : "Vijay"
        },{
            photo: "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-grey-260nw-767771860.jpg",
            clientName: "Ram"
        },
        {
            photo: "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-grey-260nw-767771860.jpg",
            clientName: "John"
        },
    ])
  return (
    <>
        <div className="d-flex align-items-center"> 
        {data.map(client => (
            <div className="row" style={{height : "50%"}}>
                <Card key={client.clientName} style={{ width: "13rem" , height : "65%"}} className="">
                    <img  src={client.photo} />
                    <Card.Body>
                        <Card.Title>{client.clientName}</Card.Title>
                        <Card.Text>
                            Hi there!
                        </Card.Text>
                        <a href="#" className="btn btn-primary">
                            Go somewhere
                        </a>
                    </Card.Body>
                </Card>
            </div>
                
            ))}
        </div>
      
    </>
  );
}
export default Client;
