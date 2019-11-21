import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import{fetchEmployeesData} from '../../redux/actions/index';

 function EmployeesList({data}) {
   
let employees=data;
console.log(employees)
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
      Employee's
    </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="right">PhoneNumber</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((row,index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell align="right">{row.phoneNo}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </React.Fragment>
  );
}
const mapStateToProps = state => {
  return {
    data: state.employee.employeesData
  };
};
export default connect(
  mapStateToProps,
  fetchEmployeesData
)(EmployeesList);