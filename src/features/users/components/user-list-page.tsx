import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { invoices } from "../mock-data/user-data-reasone"

export default function UserListPage() {


    return (
        <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    invoices.map((
                        invoices

                    ) => (
                        <TableRow>
                            <TableCell className="font-medium">{invoices.invoice}</TableCell>
                        <TableCell>{invoices.paymentStatus}</TableCell>
                            <TableCell>{invoices.paymentMethod}</TableCell>
                            <TableCell className="text-right">{invoices.totalAmount}</TableCell>
                        </TableRow>
                    )
                    )


                }


            </TableBody>
        </Table>
    )
}