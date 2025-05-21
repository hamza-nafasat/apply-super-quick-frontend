import { Outlet } from 'react-router-dom';
import SuperBankAside from '../layout/SuperBankAsideAside';
import SuperBankAsideHeader from '../layout/SuperBankAsideHeader';

function SuperBankDashboard() {
  return (
    <div>
      <section className="grid h-screen w-screen place-items-center overflow-hidden bg-[#3582e715]">
        <section className="flex h-[calc(100vh-16px)] w-[calc(100vw-16px)] gap-5">
          <SuperBankAside />
          <div className="w-full flex-1">
            <SuperBankAsideHeader />
            <main className="scroll-0 mt-[14px] h-[calc(100vh-65px)] overflow-x-hidden overflow-y-scroll xl:h-[calc(100vh-65px)]">
              <Outlet />
            </main>
          </div>
        </section>
      </section>
    </div>
  );
}

export default SuperBankDashboard;
