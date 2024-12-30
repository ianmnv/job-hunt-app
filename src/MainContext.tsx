import { createContext } from "react";
import Application from "./index";

const MainContext = createContext<Application[] | undefined>(undefined);

export default MainContext;
