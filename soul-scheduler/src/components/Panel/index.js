import {Drawer} from "../Drawer";
import {Topbar} from "../Topbar";

export const Panel = ({children}) => (
  <>
    <Topbar />
    {children}
  </>
);
