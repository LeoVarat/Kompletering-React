import React from 'react'

const Cards = ({item}) => {
    return (
        <div className="card shadow p-4 h-S100" style={{width: 22 + 'rem'}} >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg" className="card-img-top" alt="..."/> 
            <div className="card-body">
                <h5 className="card-title">User Id: {item.id}</h5>
                    <p>First Name: {item.firstName}</p>
                    <p>Last Name: {item.lastName} </p>
                    <p>Email: {item.email} </p>
            </div>
        </div>
        )
}

export default Cards

