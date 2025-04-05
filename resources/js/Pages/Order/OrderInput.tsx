import { PageProps } from '@/types';
import Table from '@/Components/Table/Table';
import TableHead from '@/Components/Table/TableHead';
import TableRow from '@/Components/Table/TableRow';
import HeaderCell from '@/Components/Table/HeaderCell';
import ColoredBox from '@/Components/Commons/ColoredBox';
import TableBody from '@/Components/Table/TableBody';
import OrderInputTemplate from './Partials/OrderInputTemplate';
import TableFoot from '@/Components/Table/TableFoot';
import FooterCell from '@/Components/Table/FooterCell';
import Box from '@/Components/Commons/Box';
import { Button } from '@material-tailwind/react';
import InfoInput from '@/Components/Forms/InfoInput';


type translationsType = {
    [key: string]: {
        [key: string]: string;
    };
}

export default function Orderinput({
    translations,
}: PageProps<{ translations: translationsType }>) {

    return (
        <main className=" w-[1024px] mx-auto my-4 items-center">
            <header className="w-8/12">
                <form className="flex flex-row row-span-2 grow gap-4 m-2 justify-start">
                    <div className="w-1/2 grid grid-flow-row grid-rows-2 gap-1">
                        <article className="grid grid-flow-col grid-cols-3">
                            <label className="border px-2 text-nowrap" htmlFor="order_number">
                                <p>{translations.words.order_number}</p>
                            </label>
                            <InfoInput type="text" name="order_number" id="order_number" />
                        </article>
                        <article className="grid grid-flow-col grid-cols-3">
                            <label className="border px-2 text-nowrap" htmlFor="order_date">
                                <p>{translations.words.order_date}</p>
                            </label>
                            <InfoInput type="date" name="order_date" id="order_date" />
                        </article>
                    </div>
                    <div className="w-1/2 grid grid-flow-row grid-rows-2 gap-1">
                        <article className="grid grid-flow-col grid-cols-3">
                            <label className="border px-2 text-nowrap" htmlFor="retailer_code">
                                {translations.words.retailer_code}
                            </label>
                            <InfoInput type="text" name="retailer_code" id="retailer_code" />
                        </article>
                        <article className="grid grid-flow-col grid-cols-3">
                            <label className="border px-2 text-nowrap" htmlFor="retailer_name">{translations.words.retailer_name}</label>
                            <InfoInput type="text" name="retailer_name" id="retailer_name" />
                        </article>
                    </div>
                </form>
            </header>

            <Table className="w-full h-[70vh] border rounded-lg">
                <TableHead>
                    <TableRow className=
                        "grid-flow-col grid-cols-8 bg-gray-400 border-gray-400 rounded-t-lg overflow-hidden"
                    >
                        <HeaderCell>
                            <ColoredBox>{translations.words.order_details_number}</ColoredBox>
                            <ColoredBox></ColoredBox>
                        </HeaderCell>
                        <HeaderCell>
                            <ColoredBox>{translations.words.gtin_code}</ColoredBox>
                            <ColoredBox>{translations.words.supplier_name}</ColoredBox>
                        </HeaderCell>
                        <HeaderCell>
                            <ColoredBox>{translations.words.product_name}</ColoredBox>
                            <ColoredBox>{translations.words.product_specification}</ColoredBox>
                        </HeaderCell>
                        <HeaderCell>
                            <ColoredBox></ColoredBox>
                            <ColoredBox>{translations.words.order_quantity}</ColoredBox>
                        </HeaderCell>
                        <HeaderCell>
                            <ColoredBox>{translations.words.wholesaling_price}</ColoredBox>
                            <ColoredBox>{translations.words.unit}</ColoredBox>
                        </HeaderCell>
                        <HeaderCell>
                            <ColoredBox>{translations.words.wholesaling_multiplication_rate}</ColoredBox>
                            <ColoredBox>{translations.words.trading_price}</ColoredBox>
                        </HeaderCell>
                        <HeaderCell>
                            <ColoredBox></ColoredBox>
                            <ColoredBox>{translations.words.amount}</ColoredBox>
                        </HeaderCell>
                        <HeaderCell>
                            <ColoredBox>{translations.words.desired_delivery_date}</ColoredBox>
                            <ColoredBox>{translations.words.notes}</ColoredBox>
                        </HeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody className="basis-10/12 border-b border-gray-400">
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
                    <OrderInputTemplate />
                    <OrderInputTemplate />
                </TableBody>
                <TableFoot className="basis-1/12">
                    <TableRow className="grid-flow-col grid-cols-8 border-transparent border-y-0 border-x-white bg-gray-400">
                        <FooterCell className="col-span-5 border border-white bg-white">
                            <Box></Box>
                            <Box></Box>
                        </FooterCell>
                        <FooterCell className="col-span-1 border-b bg-gray-400 border-b-gray-400">
                            <ColoredBox>{translations.words.order_total_amount}</ColoredBox>
                            <ColoredBox>{translations.words.order_total_quantity}</ColoredBox>
                        </FooterCell>
                        <FooterCell className="col-span-1 border-b bg-gray-400 border-b-gray-400">
                            <Box></Box>
                            <Box></Box>
                        </FooterCell>
                        <FooterCell className="col-span-1 bg-white border border-white">
                            <Box></Box>
                            <Box></Box>
                        </FooterCell>
                    </TableRow>
                </TableFoot>
            </Table>

            <Button disabled className='bg-gray-400 font-thin py-1 px-4 justify-end'>確定</Button>
        </main>
    )
}