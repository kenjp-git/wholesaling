import { translationsType } from '@/types/translationsType';
import { Dispatch, SetStateAction } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions, { DialogActionsProps } from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Table from '@/Components/Table/Table';
import TableHead from '@/Components/Table/TableHead';
import TableRow from '@/Components/Table/TableRow';
import Typography from '@mui/material/Typography';

interface ProductDialogProps extends DialogActionsProps {
    translations: translationsType;
    open: boolean;
    toggleProductDialog: Dispatch<SetStateAction<boolean>>;
}

export default function ProductDialog({
    translations,
    open,
    toggleProductDialog,
}: ProductDialogProps) {
    return (
        <>
            <Dialog
                open={open}
                onClose={() => {
                    toggleProductDialog(prev => false);
                }}
                fullWidth
            >
                <DialogTitle>
                    <Typography>{translations.words.select_product}</Typography>
                </DialogTitle>
                <DialogContent>
                    <Table className="w-full h-[50vh] border rounded-lg">
                        <TableHead>
                            <TableRow className="grid-flow-col grid-cols-4 bg-gray-400 border-gray-400 rounded-t-lg overflow-hidden">
                                <DialogHeaderCell>{translations.words.product_code}</DialogHeaderCell>
                                <DialogHeaderCell>{translations.words.product_name}</DialogHeaderCell>
                                <DialogHeaderCell>{translations.words.product_specification}</DialogHeaderCell>
                                <DialogHeaderCell>{translations.words.unit_price}</DialogHeaderCell>
                            </TableRow>
                        </TableHead>
                        <tbody
                            className="overflow-auto"
                        >
                            {/* Example product rows */}
                            {Array.from({ length: 100 }, (_, index) => (
                                <tr
                                    className="grid grid-flow-col grid-cols-4 w-full"
                                    key={index}
                                >
                                    <td>1234567890123</td>
                                    <td>商品A</td>
                                    <td>規格A</td>
                                    <td>1000円</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        sx={{ fontWeight: 'bold' }}
                        onClick={() => {
                            toggleProductDialog(prev => false);
                        }}
                    >
                        {translations.words.close}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

function DialogHeaderCell({
    children,
    ...props
}: React.HTMLProps<HTMLTableCellElement>) {
    const default_style = "grid grid-flow-row grid-rows-1 gap-px bg-blue-200 w-full p-0 text-center font-thin";
    const style = `${default_style} ${props.className}`;

    return (
        <th className={style}>
            {children}
        </th>
    );
}