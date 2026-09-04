import { useNavigate, useParams } from 'react-router-dom';
import { users } from '../../data';

export function UserDetails() {
    const params = useParams()
    const navigate= useNavigate()
    const user = users.find((item) => item.id === params.userId);

     function handleRouting(){
            navigate('/dashboard')
     }

    if (!user)
        return (
            <section className="mb-9 text-2xl">
                NO USER FOUND
            </section>
        )
    else
        return (
            <section>
                <button className="mb-[18px] border-0 bg-transparent p-0 font-bold text-[#286059] hover:text-[#193b38]" onClick={handleRouting}>Back</button>
                <div className="max-w-[640px] rounded-xl border border-[#dfe7de] bg-white p-[34px] max-[480px]:p-6">
                    <div className="mb-7 grid size-[58px] place-items-center rounded-full bg-[#d9e9e3] font-bold text-[22px] text-[#286059]">
                        {user.name.charAt(0)}
                    </div>
                    <h2 className="mb-2 font-bold text-[clamp(28px,4vw,42px)] text-[#193b38]">
                        {user.name}
                    </h2>
                    <p className="mb-6 text-xs text-[#71817c]">
                        {user.role} · {user.email}
                    </p>
                    <p className="m-0 max-w-[520px] text-base leading-relaxed text-[#71817c]">
                        {user.description}
                    </p>
                </div>
            </section>
        );
}