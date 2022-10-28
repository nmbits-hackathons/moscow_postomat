import {Header, ThemeMode, SideBar} from "./components";


const ActionMenu = ({handleChangeMode}) => {
    return <div>
        <Header />
        <SideBar />
        <ThemeMode handleChangeMode={handleChangeMode}/>
    </div>
}

export default ActionMenu
