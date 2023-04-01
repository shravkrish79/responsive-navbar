import MenuInfo from "./data/NavbarMenu.json";
import { FaBars, FaUserCircle } from "react-icons/fa"

export default function Navbar() {
    const menuItems = MenuInfo.map((itm) => {
        let str =
            <li key={itm.id}>
                <label htmlFor={"btn-" + itm.id} className="show">
                    {(itm.icon === 'FaUserCircle') && <FaUserCircle className="reacticons"/>}
                    {itm.name}</label>
                <a href="."> {(itm.icon === 'FaUserCircle') && <FaUserCircle className="reacticons"/>}{itm.name}</a>
                <input type="checkbox" id={"btn-" + itm.id} />
                {(itm.submenu) && <ul>
                    {itm.submenu.map((subitm, idx) =>
                        <li key={idx}>
                            <label htmlFor={subitm.submenuname + idx} className="show">{itm.name}</label>
                            <a href="."> {subitm.submenuname} </a>
                            <input type="checkbox" id={subitm.submenuname + idx} />
                            
                        </li>)}
                </ul>
                }
            </li>

        return str;
    })



    return (
        <div id="Navbar">
            <nav>
                <div className="logo">MyLogo</div>
                <label htmlFor="btn" className="icon">
                    <FaBars className="fa-bars" />
                </label>
                <input type="checkbox" id="btn" />
                <ul>{menuItems}</ul>
            </nav>
        </div>
    )
}