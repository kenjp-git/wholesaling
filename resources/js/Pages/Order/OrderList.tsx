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

                        <TableRow className="grid grid-flow-col gap-px bg-gray-400 w-full" key={index}>
                            <td>1234567890123</td>
                            <td>2023-10-01</td>
                            <td>0001</td>
                            <td>山田太郎</td>
                            <td>営業部</td>
                            <td>10</td>
                            <td>10000円</td>
                            <td>Web</td>
                            <td>詳細</td>
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