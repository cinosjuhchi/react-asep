import "./output.css";
import InputWithButton from "./Components/Input";
import SortableTable from "./Components/Table";

function App() {
    return (
        <>
            <div className="container mx-auto">
                <InputWithButton />
                <SortableTable />
            </div>
        </>
    );
}

export default App;
