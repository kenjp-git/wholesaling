import { PageProps } from '@/types';
import HeaderCell from '@/Components/Table/HeaderCell';
import Table from '@/Components/Table/Table';
import TableHead from '@/Components/Table/TableHead';
import TableRow from '@/Components/Table/TableRow';
import TableBody from '@/Components/Table/TableBody';
import TableHeaderBox from '@/Components/Commons/TableHeaderBox';
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
        <main className=" w-[1024px] mx-auto my-4 items-center">
            <Table className="w-full h-[70vh] rounded-lg">
                <TableHead>
                    <TableRow className=
                        "grid-flow-col grid-cols-8 bg-gray-400 border-gray-400 rounded-t-lg overflow-hidden"
                    >
                        <HeaderCell>
                            <TableHeaderBox>{translations.words.order_details_number}</TableHeaderBox>
                            <TableHeaderBox></TableHeaderBox>
                        </HeaderCell>
                        <HeaderCell>
                            <TableHeaderBox>{translations.words.gtin_code}</TableHeaderBox>
                            <TableHeaderBox>{translations.words.supplier_name}</TableHeaderBox>
                        </HeaderCell>
                        <HeaderCell>
                            <TableHeaderBox>{translations.words.product_name}</TableHeaderBox>
                            <TableHeaderBox>{translations.words.product_specification}</TableHeaderBox>
                        </HeaderCell>
                        <HeaderCell>
                            <TableHeaderBox></TableHeaderBox>
                            <TableHeaderBox>{translations.words.order_quantity}</TableHeaderBox>
                        </HeaderCell>
                        <HeaderCell>
                            <TableHeaderBox>{translations.words.wholesaling_price}</TableHeaderBox>
                            <TableHeaderBox>{translations.words.unit}</TableHeaderBox>
                        </HeaderCell>
                        <HeaderCell>
                            <TableHeaderBox>{translations.words.wholesaling_multiplication_rate}</TableHeaderBox>
                            <TableHeaderBox>{translations.words.trading_price}</TableHeaderBox>
                        </HeaderCell>
                        <HeaderCell>
                            <TableHeaderBox>{translations.words.tax_rate}</TableHeaderBox>
                            <TableHeaderBox>{translations.words.amount}</TableHeaderBox>
                        </HeaderCell>
                        <HeaderCell>
                            <TableHeaderBox>{translations.words.desired_delivery_date}</TableHeaderBox>
                            <TableHeaderBox>{translations.words.notes}</TableHeaderBox>
                        </HeaderCell>

                        {/* <HeaderCell></HeaderCell>
                        <HeaderCell></HeaderCell>
                        <HeaderCell></HeaderCell>
                        <HeaderCell></HeaderCell>
                        <HeaderCell></HeaderCell>
                        <HeaderCell></HeaderCell>
                        <HeaderCell></HeaderCell>
                        <HeaderCell></HeaderCell> */}
                    </TableRow>
                </TableHead>
                <TableBody className="basis-11/12 border-b border-x border-gray-400">
                    <OrderInputTemplate />
                    <OrderInputTemplate />
                    <OrderInputTemplate />
                    <OrderInputTemplate />
                    <OrderInputTemplate />
                    <OrderInputTemplate />
                    <OrderInputTemplate />
                    <OrderInputTemplate />
                    <OrderInputTemplate />
                    <OrderInputTemplate />
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