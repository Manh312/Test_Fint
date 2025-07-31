import type { MemberProps } from '@/app/[locale]/(unauth)/about-us/leadership-team/[[...leadership-team]]/mock';

import FImage from '../shared/FImage';

const LeadershipMember = (props: MemberProps) => {
  return (
    <div className="flex flex-col items-center mx-auto w-full max-md:max-w-[clamp(17.5rem,12.5rem+25vw,22.5rem)] gap-[clamp(1rem,0.75rem+1.25vw,1.5rem)] pb-[clamp(1rem,0.75rem+1.25vw,1.5rem)] rounded-2xl border border-solid border-neutral-6 bg-white shadow-[0px_4px_30px_0px_rgba(62,157,235,0.05)] transition-all duration-300 hover:shadow-[0px_8px_40px_0px_rgba(62,157,235,0.1)]">
      <FImage
        aspectRatio={411 / 440}
        className="w-full object-cover"
        src={`fint/about-us/${props.avatarUrl || 'avt_default.png'}`}
        alt={props.name}
        width={411}
        height={440}
      />
      <div className="text-center flex flex-col flex-1 justify-between gap-1 px-1">
        <p className={`${!props.fixSizeText ? 'content-bold-16 md:content-bold-18 xl:' : ''}content-bold-20 font-no-liga text-neutral-1`}>
          {props.name}
        </p>
        <div>
          <p className={`${!props.fixSizeText ? 'content-semi-14 xl:' : ''}content-semi-16 text-neutral-1 pb-1`}>
            {props.department}
          </p>
          <p className={`${!props.fixSizeText ? 'content-regular-12 xl:' : ''}content-regular-14 text-main-1`}>
            {props.position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadershipMember;
