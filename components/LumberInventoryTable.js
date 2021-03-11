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
            <th>Approx Amt Available (bdft)</th>
            <th>Price (per bdft)</th>
          </tr>
        </thead>
        <tbody>
          {props.lumber.map((type, index) => {
            return (
              <tr key={`${type.species}`}>
                <td key={`${type.species}-${index}`}>{type.species}</td>
                <td key={`thickness-${type.species}-${index}`}>
                  {type.thickness}
                </td>
                <td key={`quantity-${type.species}-${index}`}>
                  {type.quantity}
                </td>
                <td
                  key={`price-${type.species}-${index}`}
                >{`$${type.price}`}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default LumberInventoryTable
