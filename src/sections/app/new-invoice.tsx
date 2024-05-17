import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

import { Iconify } from '@/components';
import { Scrollbar } from '@/components/scrollbar';

export const NewInvoice = () => {
  return (
    <Card>
      <CardHeader title="New Invoice" />
      <Scrollbar>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Invoice Id</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>INV-1990</TableCell>
              <TableCell>Android</TableCell>
              <TableCell>$83.74</TableCell>
              <TableCell>
                <Chip
                  color="success"
                  variant="soft"
                  label="Paid"
                  size="small"
                  sx={{ fontWeight: 'bold' }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>INV-1990</TableCell>
              <TableCell>Android</TableCell>
              <TableCell>$83.74</TableCell>
              <TableCell>
                <Chip
                  color="success"
                  variant="soft"
                  label="Paid"
                  size="small"
                  sx={{ fontWeight: 'bold' }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>INV-1990</TableCell>
              <TableCell>Android</TableCell>
              <TableCell>$83.74</TableCell>
              <TableCell>
                <Chip
                  color="success"
                  variant="soft"
                  label="Paid"
                  size="small"
                  sx={{ fontWeight: 'bold' }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>INV-1990</TableCell>
              <TableCell>Android</TableCell>
              <TableCell>$83.74</TableCell>
              <TableCell>
                <Chip
                  color="success"
                  variant="soft"
                  label="Paid"
                  size="small"
                  sx={{ fontWeight: 'bold' }}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Scrollbar>

      <Divider />
      <Box textAlign="right" p={2}>
        <Button variant="text" size="small">
          View all <Iconify icon="charm:chevron-right" />
        </Button>
      </Box>
    </Card>
  );
};
