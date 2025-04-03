import TableRow from "@/Components/Table/TableRow";
import DataCell from "@/Components/Table/DataCell";
import Box from "@/Components/Commons/Box";
import TableInput from "@/Components/Forms/TableInput";
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
                <Box><TableInput /></Box>
                <Box></Box>
            </DataCell>
            <DataCell>
                <Box></Box>
                <Box></Box>
            </DataCell>
            <DataCell>
                <Box></Box>
                <Box><TableInput /></Box>
            </DataCell>
            <DataCell>
                <Box></Box>
                <Box></Box>
            </DataCell>
            <DataCell>
                <Box><TableInput /></Box>
                <Box></Box>
            </DataCell>
            <DataCell>
                <Box></Box>
                <Box></Box>
            </DataCell>
            <DataCell>
                <Box><TableInput /></Box>
                <Box><TableInput /></Box>
            </DataCell>
        </TableRow>
    )
}
// Compare this snippet from resources/js/Components/Table/TableCell.tsx:
// import { PropsWithChildren } from "react";
//