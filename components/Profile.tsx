import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faEnvelope,
  faMapMarkerAlt,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import SocialLinks from './SocialLinks';

const map: {
  [someStrKeyWhichIsDynamic: string]: {
    icon: any
  },
} = {
  organization: { icon: faBuilding },
  location: { icon: faMapMarkerAlt },
  email: { icon: faEnvelope },
  url: { icon: faLink },
};
interface ProfileProps {
  enabled: boolean;
  avatar: string;
  name: string;
  authority: {
    [someStrKeyWhichIsDynamic: string]: {
      text: string;
      enabled: boolean;
    };
  };
  socialLinks: any;
}

export default function Profile({
  enabled,
  avatar,
  name,
  authority,
  socialLinks,
}: ProfileProps) {
  return enabled ? (
    <>
      <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
        <Image priority alt={name} src={avatar} height="1500" width="1500" className="w-32 h-32 rounded-full sm:w-36 sm:h-36 md:w-40 md:h-40" />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col text-slate-800 dark:text-slate-200">
          <div className="text-4xl font-bold tracking-wider text-center">
            {name}
          </div>
          <div className="flex flex-col my-4 text-sm">
            {Object.keys(authority).map((property) => {
              const { text } = authority[property];
              const { icon } = map[property];

              return authority[property].enabled ? (
                text && (
                  <div key={property} className="flex items-center">
                    <div>
                      <FontAwesomeIcon icon={icon} className="w-3 mx-2" />
                    </div>
                    <div>
                      {text}
                    </div>
                  </div>
                )
              ) : true;
            })}
          </div>
          <SocialLinks items={socialLinks} />
        </div>
      </div>
    </>
  ) : <template />;
}
