// import Aside from '../layout/Aside';
// import Header from '../layout/Header';
import { Outlet } from 'react-router-dom';
import ClientMemberAside from '../layout/ClientMemberAside';
import ClientMemberHeader from '../layout/ClientMemberHeader';

function ClientMemberDashboard() {
  return (
    <div>
      <section className="grid h-screen w-screen place-items-center overflow-hidden bg-[#3582e715]">
        <section className="flex h-[calc(100vh-16px)] w-[calc(100vw-16px)] gap-5">
          <ClientMemberAside />
          <div className="w-full flex-1">
            <ClientMemberHeader />
            <main className="scroll-0 mt-[14px] h-[calc(100vh-65px)] overflow-x-hidden overflow-y-scroll xl:h-[calc(100vh-65px)]">
              <Outlet />
            </main>
          </div>
        </section>
      </section>
    </div>
  );
}

export default ClientMemberDashboard;
