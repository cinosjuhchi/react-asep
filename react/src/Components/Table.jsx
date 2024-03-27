import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    CardFooter,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import DialogDefault from "./Modalbutton";

const TABLE_HEAD = [
    "NRP",
    "Nama",
    "Pangkat",
    "Dikum",
    "Dikpol",
    "Fungsi Polri",
    "Diklat",
    "Dikbangpes",
    "Aksi",
];

const TABLE_ROWS = [
    {
        nrp: "123456789",
        nama: "John Michael",
        pangkat: "Brada",
        dikum: "S2",
        dikpol: "Unknown",
        fungsi: "Unknown",
        diklat: "Unknown",
        dikbangpes: "Unknown",
        date: "23/04/18",
    },
];

export default function SortableTable() {
    return (
        <Card className="h-full w-full mt-4">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="flex items-center justify-between">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Data Kwaldik Korpolairud
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all members
                        </Typography>
                    </div>
                    <div className="flex shrink-0 gap-2 flex-row justify-end">
                        <div className="w-full md:w-72">
                            <Input
                                label="Search"
                                icon={
                                    <MagnifyingGlassIcon className="h-5 w-5" />
                                }
                            />
                        </div>
                        <DialogDefault />
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-auto px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head, index) => (
                                <th
                                    key={head}
                                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                    >
                                        {head}{" "}
                                        {index !== TABLE_HEAD.length - 1 && (
                                            <ChevronUpDownIcon
                                                strokeWidth={2}
                                                className="h-4 w-4"
                                            />
                                        )}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(
                            (
                                {
                                    nrp,
                                    nama,
                                    pangkat,
                                    dikum,
                                    diklat,
                                    dikpol,
                                    dikbangpes,
                                    fungsi,
                                },
                                index
                            ) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={nrp}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {nrp}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {nama}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {pangkat}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {dikum}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {dikpol}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {fungsi}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {diklat}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {dikbangpes}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Tooltip content="Edit User">
                                                <IconButton variant="text">
                                                    <PencilIcon className="h-4 w-4" />
                                                </IconButton>
                                            </Tooltip>
                                        </td>
                                    </tr>
                                );
                            }
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                >
                    Page 1 of 10
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" size="sm">
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm">
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
