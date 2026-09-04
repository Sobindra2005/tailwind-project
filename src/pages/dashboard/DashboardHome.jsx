import { useNavigate } from 'react-router-dom';
import { users } from '../../data';

export function DashboardHome() {
    const navigate = useNavigate();
    return (
        <section>
            <div className="mb-5 grid grid-cols-2 gap-[18px] max-[480px]:gap-2.5">
                <article className="min-h-[155px] rounded-xl border border-[#dfe7de] bg-white p-6 max-[480px]:p-[17px]"><span className="block text-[13px] text-[#71817c]">Active learners</span><strong className="my-3.5 block font-bold text-[38px] text-[#193b38]">{users.length}</strong><span className="block text-[13px] text-[#71817c]">in your workspace</span></article>
                <article className="min-h-[155px] rounded-xl border border-[#e7f276] bg-[#e7f276] p-6 max-[480px]:p-[17px]"><span className="block text-[13px] text-[#4a5b3d]">Next lesson</span><strong className="my-3.5 block font-bold text-[38px] text-[#193b38]">03</strong><span className="block text-[13px] text-[#4a5b3d]">URL parameters</span></article>
            </div>
            <div className="flex items-center justify-between gap-6 rounded-xl border border-[#dfe7de] bg-white p-[26px] max-[760px]:flex-col max-[760px]:items-start">
                <div>
                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[.12em] text-[#6f827c]">Try the flow</p>
                    <h3 className="mb-2 font-semibold text-[19px] text-[#193b38]">Open a learner profile</h3>
                    <p className="m-0 text-[#71817c]">That button uses programmatic navigation and passes a dynamic id.</p>
                </div>
                <button className="shrink-0 rounded-md bg-[#193b38] px-4 py-3 font-bold text-white hover:bg-[#2b514c]" type="button">
                    View {users[0].name.split(' ')[0]}
                </button>
            </div>
        </section>
    );
}