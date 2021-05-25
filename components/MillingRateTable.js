import Table from 'react-bootstrap/Table'

import React from 'react'

const RateTable = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Where Milling Happens</th>
            <th>Hourly Rate (2-hour minimum)</th>
            <th>Travel/Setup Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Logs are brought to us</td>
            <td>$85</td>
            <td>$0</td>
          </tr>
          <tr>
            <td>We come to the logs (less than 30 miles away)</td>
            <td>$100</td>
            <td>$100 flat rate</td>
          </tr>
          <tr>
            <td>We come to the logs (more than 30 miles away)</td>
            <td>$100</td>
            <td>$100 + $2/mile for the round-trip mileage</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default RateTable
