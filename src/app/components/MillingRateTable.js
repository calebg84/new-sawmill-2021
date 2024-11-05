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
            <td>$150</td>
            <td>$0</td>
          </tr>
          <tr>
            <td>We come to the logs</td>
            <td>$150</td>
            <td>$100 + $2.00/mile for the round-trip mileage</td>
          </tr>
          <tr>
            <td>Logs Between 36" - 60" Diameter</td>
            <td>$225</td>
            <td>As indicated above</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default RateTable
