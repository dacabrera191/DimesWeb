import React, {useState} from "react"
import Button from "./CustomButton"

interface NavProps
{
    height: string,
    width: string,
    color: string
}

const Navbar: React.FC<NavProps> = ({ color,  height, width }) =>
{

    return(
        <table style = {{backgroundColor: color, height, width}}>
            <th>
                <tr>
                    <Button
                    border="none"
                    color="White"
                    height = "50px"
                    onClick={() => console.log("You clicked on the pink rectangle!")}
                    width = "100px"
                    children = "Home"/>
                </tr>
            </th>

        </table>
    );
}
export default Navbar