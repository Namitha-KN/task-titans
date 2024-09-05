import PieChart from "./pieChart";
import DropdownMenu from "./navigation";
import logo from "../assets/logo.png"
import TaskList from "./taskList";

const menu1Items = [
    { label: 'Text1', href: '#' },
    { label: 'Text2', href: '#' },
    { label: 'Text3', href: '#' },
];

const menu2Items = [
    { label: 'Menu 2-1', href: '#' },
    { label: 'Menu 2-2', href: '#' },
    { label: 'Menu 2-3', href: '#' },
];

const menu3Items = [
    { label: 'Menu 3-1', href: '#' },
    { label: 'Menu 3-2', href: '#' },
    { label: 'Menu 3-3', href: '#' },
];


export default function EngineersDashboard() {
    return (
        <div className="container">
            <div className="bg-white">
                <h1 className="text-md">Engineers Dashboard</h1>
                <div className="flex items-center bg-background space-x-4 mb-6">

                    <div className="bg-gray-200 p-2 rounded-full">
                        <img width={100} height={50} src={logo} alt="Task Titans" />
                    </div>
                    <div className="flex w-100">
                        <DropdownMenu buttonText="Menu 1" menuItems={menu1Items} />
                        <DropdownMenu buttonText="Menu 2" menuItems={menu2Items} />
                        <DropdownMenu buttonText="Menu 3" menuItems={menu3Items} />
                    </div>
                </div>
                <div className="row">
                    <div className="bg-white col-12 col-md-8 p-4 rounded-lg">
                        <h3 className="font-bold text-lg mb-4">To Do List</h3>
                        <TaskList />
                    </div>
                    <div className="col-md-4 col-12">
                        <PieChart />
                    </div>

                </div>
            </div>
        </div>
    );
}