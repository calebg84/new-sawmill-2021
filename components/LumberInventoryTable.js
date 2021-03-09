import Table from 'react-bootstrap/Table'

import React from 'react'

const LumberInventoryTable = (props) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Species</th>
            <th>Thickness</th>
            <th>Approximate Quantity Available (bdft)</th>
            <th>Price (per bdft)</th>
          </tr>
        </thead>
        <tbody>
          {props.lumber.map((type) => {
            return (
              <tr>
                <td>{type.species}</td>
                <td>{type.thickness}</td>
                <td>{type.quantity}</td>
                <td>{`$${type.price}`}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default LumberInventoryTable
