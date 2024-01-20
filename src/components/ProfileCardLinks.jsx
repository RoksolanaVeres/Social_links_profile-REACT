import { profileData } from "../profileData";

export default function ProfileCardLinks() {
  return (
    <ul className="grid w-full gap-4 pt-6 text-center text-slate-800 *:rounded-lg *:bg-slate-200 *:py-4 dark:text-white dark:*:bg-darkGrey">
      {profileData.socialNetworks.map((network) => {
        return (
          <a
            key={network.networkName}
            href={network.link}
            target="_blank"
            className="shadow-xl duration-300 ease-linear hover:bg-green hover:font-bold hover:text-darkGrey hover:transition-all dark:hover:bg-green"
          >
            {network.networkName}
          </a>
        );
      })}
    </ul>
  );
}
