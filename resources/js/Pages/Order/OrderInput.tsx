import { PageProps } from '@/types';
import HeaderCell from '@/Components/Table/HeaderCell';
import Table from '@/Components/Table/Table';
import TableHead from '@/Components/Table/TableHead';
import TableRow from '@/Components/Table/TableRow';
import TableBody from '@/Components/Table/TableBody';
import OrderInputTemplate from './Partials/OrderInputTemplate';
import TableFoot from '@/Components/Table/TableFoot';
import FooterCell from '@/Components/Table/FooterCell';

import { Button } from '@material-tailwind/react';
import Typography from '@mui/material/Typography';
type translationsType = {
    [key: string]: {
        [key: string]: string;
    };
}

export default function OrderInput({
    translations,
}: PageProps<{ translations: translationsType }>) {

    return (
        <main className=" w-[1280px] mx-auto my-4 items-center justify-center">
            <Table>
                <TableHead>
                    <TableRow className=
                        "grid-cols-8 bg-gray-400 border-gray-400 rounded-t-lg overflow-hidden"
                    >
                        <HeaderCell>{translations.words.order_details_number}</HeaderCell>
                        <HeaderCell>{translations.words.gtin_code}</HeaderCell>
                        <HeaderCell>{translations.words.product_name}</HeaderCell>
                        <HeaderCell></HeaderCell>
                        <HeaderCell>{translations.words.wholesaling_price}</HeaderCell>
                        <HeaderCell>{translations.words.wholesaling_multiplication_rate}</HeaderCell>
                        <HeaderCell></HeaderCell>
                        <HeaderCell>{translations.words.desired_delivery_date}</HeaderCell>
                        <HeaderCell></HeaderCell>
                        <HeaderCell>{translations.words.supplier_name}</HeaderCell>
                        <HeaderCell>{translations.words.product_specification}</HeaderCell>
                        <HeaderCell>{translations.words.order_quantity}</HeaderCell>
                        <HeaderCell>{translations.words.unit}</HeaderCell>
                        <HeaderCell>{translations.words.trading_price}</HeaderCell>
                        <HeaderCell>{translations.words.amount}</HeaderCell>
                        <HeaderCell>{translations.words.notes}</HeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody className="min-h-full border-green-400">
                    <OrderInputTemplate />
                    <OrderInputTemplate />
                    <OrderInputTemplate />
                    <OrderInputTemplate />
                    <OrderInputTemplate />
                    {/* <OrderInputTemplate />
                    <OrderInputTemplate />
                    <OrderInputTemplate />
                    <OrderInputTemplate />
                    <OrderInputTemplate /> */}
                </TableBody>
                <TableFoot>
                    <TableRow className="grid-cols-8 border-transparent border-t-0 border-x-white border-b-white bg-gray-400">
                        <FooterCell className="col-span-5 border border-white bg-white"></FooterCell>
                        <FooterCell className="col-span-1 bg-gray-100 border-b border-b-gray-400">
                            <Typography>
                                {translations.words.total}
                            </Typography>
                        </FooterCell>
                        <FooterCell className="col-span-1 border-b bg-white border-b-gray-400 p-0">
                            <Typography>
                                {translations.words.totalPrice}
                            </Typography>
                        </FooterCell>
                        <FooterCell className="col-span-1 bg-white border border-white p-0"></FooterCell>
                    </TableRow>
                </TableFoot>
            </Table>
            <Button disabled className='bg-gray-400 font-thin py-1 px-4 justify-end'>確定</Button>
        </main>
    )
}