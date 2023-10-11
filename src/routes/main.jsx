import { Nav } from "../Nav";
import { Outlet } from "react-router-dom";

export default function Main() {

    return (
      <>
        <div id="sidebar">
            <Nav />
        </div>

        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }

