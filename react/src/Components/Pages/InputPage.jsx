import SortableTable from "../Table";
import { Typography } from "@material-tailwind/react";

function InputPage() {
    return (
        <div className="container m-auto mt-4">
            <Typography>
                <a className="" href="/">
                    <i className="fas "></i>
                    Kembali ke Dashboard
                </a>
            </Typography>
            <div className="container mx-auto">
                <SortableTable />
            </div>
        </div>
    );
}

export default InputPage;
