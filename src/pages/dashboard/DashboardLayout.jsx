import { Link, Outlet} from 'react-router-dom';


export function DashboardLayout() {
    
    return (
        <div className="flex bg-[#f5f7f3] text-[#20302f]">
            <aside className="flex  min-h-screen  shrink-0 flex-col bg-[#193b38] p-6 text-[#dbe9df] max-[760px]:w-[76px] max-[760px]:items-center max-[760px]:px-2.5 max-[760px]:py-6">
                <nav className="mt-[52px] grid gap-2 max-[760px]:mt-0" aria-label="Dashboard navigation">
                  <Link to='/dashboard'>dashboard</Link>
                  <Link to='/dashboard/Users'>Users</Link>
                </nav>
            </aside>

           <div className='p-8'>
            <Outlet/>
           </div>
        </div>
    );
}