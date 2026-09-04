
import { Link } from 'react-router-dom';
import { users } from '../../data';

export function Users() {
    return (
        
            <section className='max-w-20'>
                <div className="grid gap-2.5">
                    {users.map((user) => (
                        <article className="grid grid-cols-[auto_minmax(150px,1.2fr)_minmax(130px,.8fr)_auto] items-center gap-[18px] rounded-[10px] border border-[#dfe7de] bg-white px-5 py-[17px] max-[760px]:grid-cols-[auto_1fr_auto] max-[760px]:gap-2.5 max-[760px]:p-3.5" key={user.id}>
                            <div className="grid size-[38px] place-items-center rounded-full bg-[#d9e9e3] font-bold text-[#286059]">{user.name.charAt(0)}</div>
                            <div>
                                <h3 className="mb-1 text-[15px] text-[#193b38]">{user.name}</h3>
                                <p className="m-0 max-w-[140px] truncate text-xs text-[#71817c]">{user.role} · {user.email}</p></div>
                            <div className="text-[11px] text-[#71817c] max-[760px]:hidden"><span>{user.progress}% complete</span><div className="mt-1.5 h-1.5 overflow-hidden rounded bg-[#e5ece6]"><div className="h-full rounded bg-[#4c9583]" style={{ width: `${user.progress}%` }} /></div></div>
                            <button className="border-0 bg-transparent font-bold text-[#286059] hover:text-[#193b38] max-[480px]:text-xs" type="button">View profile <span aria-hidden="true">-&gt;</span></button>
                        </article>
                    ))}
                </div>
            </section>
       
    );
}