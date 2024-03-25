import React from "react";
import { Input, Button } from "@material-tailwind/react";

export default function InputWithButton() {
    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);

    return (
        <div className="relative flex w-full max-w-[24rem]">
            <Input
                type="file"
                label="Select File"
                value={excel}
                onChange={onChange}
                className="pr-20"
                containerProps={{
                    className: "min-w-0",
                }}
            />
            <Button
                size="sm"
                color={excel ? "gray" : "blue-gray"}
                disabled={!excel}
                className="!absolute right-1 top-1 rounded"
            >
                Invite
            </Button>
        </div>
    );
}
