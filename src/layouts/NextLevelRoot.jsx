import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const NextLevelRoot = () => {
    // const [count, setCount] = useState(0)
    // const handleClick = () => {
    //     setCount(count + 1)
    //     setCount(count + 1)
    //     setCount(count => count + 1)
    // }

    // useEffect(() => {
    //     document.title = `Updated: ${count}`
    // }, [count])
    // const [date, setDate] = useState(new Date())
    // const run = () => {
    //     setDate(new Date())
    // }

    // useEffect(() => {
    //     const timer = setInterval(run, 1000)
    //     return () => clearInterval(timer)
    // }, [])
    const activeNavClass = ({ isActive }) => `${isActive ? 'text-primary' : ''}`
    return (
        <div>
            {/* <Card>
                <div className="text-xl font-mono">
                    {date.toLocaleTimeString()}
                </div>
            </Card> */}
            {/* <h2>Hi: {count}</h2>       
             <Button  onClick={handleClick}>Click Here</Button>     */}


            <nav>
                <ul className="flex gap-5">

                    <li>
                        <NavLink className={activeNavClass} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={activeNavClass} to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>

            <Outlet></Outlet>
        </div>
    );
};

export default NextLevelRoot;