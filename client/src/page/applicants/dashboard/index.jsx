import { Outlet } from 'react-router-dom';
import ApplicantsAside from '../layout/ApplicantsAside';
import ApplicantsHeader from '../layout/ApplicantsHeader';

function ApplicantsDashboard() {
  return (
    <div>
      <section className="grid h-screen w-screen place-items-center overflow-hidden bg-[#3582e715]">
        <section className="flex h-[calc(100vh-16px)] w-[calc(100vw-16px)] gap-5">
          <ApplicantsAside />
          <div className="w-full flex-1">
            <ApplicantsHeader />
            <main className="scroll-0 mt-[14px] h-[calc(100vh-65px)] overflow-x-hidden overflow-y-scroll xl:h-[calc(100vh-65px)]">
              <Outlet />
            </main>
          </div>
        </section>
      </section>
    </div>
  );
}

export default ApplicantsDashboard;
