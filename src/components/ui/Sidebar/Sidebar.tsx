import { FC } from "react";
import Link from "../../core/Link";
import Type from "../../core/Type";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  return (
    <div className="w-full md:mr-4 md:mt-24  ">
      <div className="ml-1 mb-1">
        <Type variant="heading">Help Center</Type>
      </div>
      <ul className="w-full md:flex-col md:min-w-full flex flex-col list-none">
        <li className="items-center mt-2">
          <Link variant="menu" icon="house" href="/help/1vDbUQkuG3VyTC4Az40Pfo" text="Sample menu" />
        </li>
        <li className="items-center mt-2">
          <Link variant="menu" icon="house" href="/help/1vDbUQkuG3VyTC4Az40Pfo" text="Sample menu" />
        </li>
        <li className="items-center mt-2">
          <Link variant="menu" icon="house" href="/help/1vDbUQkuG3VyTC4Az40Pfo" text="Sample menu" />
        </li>
        <li className="items-center mt-2">
          <Link variant="menu" icon="house" href="/help/1vDbUQkuG3VyTC4Az40Pfo" text="Sample menu" />
        </li>

        {/* <li className="items-center">
          <Link variant="menu" href="/help/1vDbUQkuG3VyTC4Az40Pfo" text="Sample menu" />
        </li>
        <li className="items-center">
          <Link variant="menu" href="/help/1vDbUQkuG3VyTC4Az40Pfo" text="Sample menu" />
        </li> */}
        {/* <li className="items-center">
          <Link variant="menu" href="/help/1vDbUQkuG3VyTC4Az40Pfo">
            <a href="#pablo" className="flex text-base leading-5 p-3 pl-4  rounded-md">
              <Image src="/yacht.png" width={17} height={17} />
              <div className="ml-4 -mt-1">Earning Coins and Rewards</div>
            </a>
          </Link>
        </li> */}
        {/* <li className="items-center">
          <Link href="/help/1vDbUQkuG3VyTC4Az40Pfo">
            <a href="#pablo" className="flex text-base leading-5 p-3 pl-4  rounded-md">
              <Image src="/yacht.png" width={17} height={17} />
              <div className="ml-4 -mt-1">Payments</div>
            </a>
          </Link>
        </li>
        <li className="items-center">
          <Link href="/help/1vDbUQkuG3VyTC4Az40Pfo">
            <a href="#pablo" className="flex text-base leading-5 p-3 pl-4  rounded-md bg-blue-200">
              <Image src="/yacht.png" width={17} height={17} />
              <div className="ml-4 -mt-1">Notifications</div>
            </a>
          </Link>
        </li>
        <li className="items-center">
          <ul className="w-full flex flex-wrap justify-end">
            <li className="w-full items-center flex justify-end">
              <Link href="/help/1vDbUQkuG3VyTC4Az40Pfo">
                <a href="#pablo" className="w-5/6 flex text-base leading-5 p-3 pl-4  rounded-md">
                  St.John Fresh
                </a>
              </Link>
            </li>
            <li className="w-full display flex items-center justify-end">
              <Link href="/help/1vDbUQkuG3VyTC4Az40Pfo">
                <a href="#pablo" className="w-5/6 flex text-base leading-5 p-3 pl-4  rounded-md">
                  Smoothies
                </a>
              </Link>
            </li>
          </ul>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
