import './styles.scss';

import React from 'react';

import { GIOI_THIEU_CHUNG } from '@/components/GioiThieuChung/mock';

const BentoProfile = () => (
  <div className="bento">
    <div className="Thu bg-black-800 rounded-xl ">
      <img src="/assets/fint/thu-taking-notes.png" alt="woman taking notes" className="w-full h-full object-cover rounded-[12px]" />
    </div>
    <div className="Meeting bg-black-800 rounded-xl ">
      <img src="/assets/fint/meeting.png" alt="meeting" className="w-full h-full object-cover rounded-[12px]" />
    </div>
    <div className="Teambuilding bg-black-800 rounded-xl ">
      <img src="/assets/fint/team-building.png" alt="FINT birthday" className="w-full h-full object-cover rounded-[12px]" />
    </div>
    <div className="Stats bg-main-2 rounded-xl  flex flex-col content-center px-4 py-8 gap-1.5 text-neutral-8">
      <div className="client flex flex-col justify-center items-center">
        <div className="font-magistral font-bold text-5xl">{GIOI_THIEU_CHUNG.clients.count}</div>
        <div className="pt-1.5 content-bold-18">{GIOI_THIEU_CHUNG.clients.label}</div>
      </div>
      <span className=" text-center">{GIOI_THIEU_CHUNG.clients.description}</span>
    </div>
  </div>
);

export default BentoProfile;
