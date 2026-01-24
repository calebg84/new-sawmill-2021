import Table from 'react-bootstrap/Table'

import React from 'react'

const PriceTable = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Slab Size (sq ft)</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0-9.9</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>10-19.9</td>
            <td>$150</td>
          </tr>
          <tr>
            <td>20-32</td>
            <td>$200</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default PriceTable
