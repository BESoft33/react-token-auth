import { Outlet } from "react-router-dom";
import { Header } from "../Header";

export default function Root() {

  return (
    <>
      <div>
        <Header />
      </div>
      <div id="main">
        <Outlet />
      </div>
    </>
  );
}