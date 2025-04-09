import TableRow from "@/Components/Table/TableRow";
import DataCell from "@/Components/Table/DataCell";
import Box from "@/Components/Commons/Box";
import DataInput from "@/Components/Forms/DataInput";
import { PropsWithChildren } from "react";

export type OrderDetailsType = {
    order_details_number: string,
    gtin_code: string,
    product_name: string,
    wholesaling_price: number,
    wholesaling_multiplication_rate: number,
    desired_delivery_date: string,
    supplier_name: string,
    product_specification: string,
    order_quantity: number,
    unit: string,
    trading_price: number,
    amount: number,
    notes: string,
}

export default function OrderInputTemplate({
    // data,
}: {}) {
    return (
        <TableRow className="grid-flow-col grid-cols-8 border-gray-400 bg-gray-400">
            <DataCell>
                <Box></Box>
                <Box></Box>
            </DataCell>
            <DataCell>
                <Box><DataInput /></Box>
                <Box></Box>
            </DataCell>
            <DataCell>
                <Box></Box>
                <Box></Box>
            </DataCell>
            <DataCell>
                <Box></Box>
                <Box><DataInput /></Box>
            </DataCell>
            <DataCell>
                <Box></Box>
                <Box></Box>
            </DataCell>
            <DataCell>
                <Box><DataInput /></Box>
                <Box></Box>
            </DataCell>
            <DataCell>
                <Box></Box>
                <Box></Box>
            </DataCell>
            <DataCell>
                <Box><DataInput /></Box>
                <Box><DataInput /></Box>
            </DataCell>
        </TableRow>
    )
}
