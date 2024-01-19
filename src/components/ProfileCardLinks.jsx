import { profileData } from "../profileData";

export default function ProfileCardLinks() {
  return (
    <ul className="grid w-full gap-4 pt-6 text-center text-white *:rounded-lg *:bg-darkGrey *:py-4">
      {profileData.socialNetworks.map((network) => {
        return (
          <a
            key={network.networkName}
            href={network.link}
            target="_blank"
            className="duration-300 ease-linear hover:bg-green hover:font-bold hover:text-darkGrey hover:transition-all"
          >
            {network.networkName}
          </a>
        );
      })}
    </ul>
  );
}
