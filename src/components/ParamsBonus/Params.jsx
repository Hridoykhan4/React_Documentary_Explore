import { Outlet } from "react-router-dom";

const Params = () => {
    return (
        <div>
            <h2 className="text-red-600 text-center">I am Params Dad</h2>
            <div className="py-3">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Params;