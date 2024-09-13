import {
  Table as TableMui,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material"
import { useGetOrdersQuery } from "../services/orderApi"
import Spinner from "./Spinner"
import IOrder from "../models/order"

function Table() {
  const { data: orders, error, isLoading } = useGetOrdersQuery()

  if (isLoading) return <Spinner />
  if (error) return <div>Error loading orders</div>

  return (
    <TableMui>
      <TableHead>
        <TableRow>
          <TableCell>id</TableCell>
          <TableCell>title</TableCell>
          <TableCell>category</TableCell>
          <TableCell>price</TableCell>
          <TableCell>rate</TableCell>
          <TableCell>count</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {orders?.map((order: IOrder) => (
          <TableRow key={order.id}>
            <TableCell>{order.id}</TableCell>
            <TableCell>{order.title}</TableCell>
            <TableCell>{order.category}</TableCell>
            <TableCell>{order.price}</TableCell>
            <TableCell>{order.rating.count}</TableCell>
            <TableCell>{order.rating.rate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableMui>
  )
}

export default Table
