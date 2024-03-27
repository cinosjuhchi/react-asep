export default function InputWithButton() {
    return (
        <>
            <label className="text-black font-medium">Select your file</label>
            <div className="relative w-full border border-1 border-gray-500 rounded-md p-1 active:border-black hover:border-black">
                <input type="file" className="w-full" />
            </div>
        </>
    );
}
