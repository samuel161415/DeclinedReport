import { columnsTotal } from "./data";
import * as React from 'react';
import TableCell from '@mui/material/TableCell';

function rowContentTotal(_index, row) {
    return (
      <React.Fragment>
        {columnsTotal.map((column) => (
          <TableCell
            key={column.dataKey}
            align={column.numeric || false ? 'right' : 'left'}
          >
            {row[column.dataKey]}
          </TableCell>
        ))}
      </React.Fragment>
    );
  }

 export default rowContentTotal