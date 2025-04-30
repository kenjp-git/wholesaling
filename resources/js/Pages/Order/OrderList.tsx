import { ReactElement } from 'react';
import { PageProps } from '@/types';
import Table from '@/Components/Table/Table';
import TableHead from '@/Components/Table/TableHead';
import TableRow from '@/Components/Table/TableRow';
import ColoredBox from '@/Components/Commons/ColoredBox';
import { translationsType } from '@/types/translationsType';
import WholesalingLayout from '@/Layouts/WholesalingLayout';
import TableBody from '@/Components/Table/TableBody';
import HeaderCell from '@/Components/Table/HeaderCell';

const OrderList = function ({
    translations
}: PageProps<{ translations: translationsType }>) {

    return (
        <main className=" w-[1024px] mx-auto my-4 items-center">
            <section>
                <form></form>
            </section>

            <Table className="w-full h-[70vh] border rounded-lg">
                <TableHead>
                    <tr className="grid grid-flow-col ">
                        <td>
                            <ColoredBox>{translations.words.order_number}</ColoredBox>
                        </td>
                        <td>
                            <ColoredBox>{translations.words.order_date}</ColoredBox>
                        </td>
                        <td>
                            <ColoredBox>{translations.words.customer_code}</ColoredBox>
                        </td>
                        <td>
                            <ColoredBox>{translations.words.customer_name}</ColoredBox>
                        </td>
                        <td>
                            <ColoredBox>{translations.words.department_name}</ColoredBox>
                        </td>
                        <td>
                            <ColoredBox>{translations.words.item_quantity}</ColoredBox>
                        </td>
                        <td>
                            <ColoredBox>{translations.words.total_amount}</ColoredBox>
                        </td>
                        <td>
                            <ColoredBox>{translations.words.order_method}</ColoredBox>
                        </td>
                        <td>
                            <ColoredBox>{translations.words.view_order_detail}</ColoredBox>
                        </td>
                    </tr>
                </TableHead>
                <TableBody>
                    {Array.from({ length: 100 }, (_, index) => (

                        <TableRow className="grid grid-flow-col grid-cols-9 gap-px bg-gray-400 w-full" key={index}>
                            <ListDataCell>1234567890123</ListDataCell>
                            <ListDataCell>2023-10-01</ListDataCell>
                            <ListDataCell>0001</ListDataCell>
                            <ListDataCell>山田太郎</ListDataCell>
                            <ListDataCell>営業部</ListDataCell>
                            <ListDataCell>10</ListDataCell>
                            <ListDataCell>10000円</ListDataCell>
                            <ListDataCell>Web</ListDataCell>
                            <ListDataCell>詳細</ListDataCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </main>
    )
}

OrderList.layout = (page: ReactElement) => {
    const pageName = page.props.translations.words.OrderList

    return (
        <WholesalingLayout
            pageName={pageName}
            children={page}
        />
    );
}

export default OrderList;

function ListDataCell({
    children,
    ...props
}: {
    children: React.ReactNode;
}) {
    return (
        <td className="border border-white bg-white">
            {children}
        </td>
    )
}