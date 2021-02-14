import Table from 'react-bootstrap/Table'

import React from 'react'

const PriceTable = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Size</th>
            <th>Price</th>
            <th>Delivery Fee (within 10 miles)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 Face-cord (1/3 full cord)</td>
            <td>$100</td>
            <td>$25</td>
          </tr>
          <tr>
            <td>Full cord (3 face-cords)</td>
            <td>$275</td>
            <td>$25</td>
          </tr>
          <tr>
            <td>Camping Bundles (approx .9 cubic feet</td>
            <td>$5</td>
            <td>pick-up only</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default PriceTable
