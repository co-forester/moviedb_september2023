import {useContext} from "react";

import {ContextSwitcher} from "../hoc";

const useAppSwitcherContext = () => useContext(ContextSwitcher)

export {useAppSwitcherContext}