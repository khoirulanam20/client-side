import { NavLink } from "react-router-dom";
import { Icon } from "../Element/Icon";
import Logo from "../Element/Logo";

const Navbar = () => {
  const menus = [
    {
      id: "overview",
      link: "/",
      icon: <Icon.Overview />,
      label: "Overview",
    },
    {
      id: "balance",
      link: "/balance",
      icon: <Icon.Balance />,
      label: "Balance",
    },
    {
      id: "goals",
      link: "/goals",
      icon: <Icon.Goals />,
      label: "Goals",
    },
    {
      id: "transaction",
      link: "/transaction",
      icon: <Icon.Transaction />,
      label: "Transaction",
    },
    {
      id: "bill",
      link: "/bill",
      icon: <Icon.Bill />,
      label: "Bill",
    },
    {
      id: "expenses",
      link: "/expenses",
      icon: <Icon.Expenses />,
      label: "Expenses",
    },
  ];

  return (
    <div className="bg-defaultBlack">
      <nav className="sticky top-0 text-special-bg2 sm:w-72 w-28 min-h-screen px-7 py-12 flex flex-col justify-between">
        <div>
        <div className="flex justify-center mb-10">
          <Logo variant="text-white text-2xl" />
        </div>
        {menus.map((menu) => (
          <NavLink 
          key={menu.id} 
          to={menu.link}
            className={({ isActive }) =>
              isActive 
                ? "flex bg-primary text-white font-bold px-4 py-3 rounded-md"
                : "flex hover:bg-special-bg3 hover:text-white px-4 py-3 rounded-md"
            }
          >
            <div className="mx-auto sm:mx-0">{menu.icon}</div>
            <div className="ms-3 hidden sm:block">{menu.label}</div>
          </NavLink>
        ))}
      </div>
      <div className="sticky bottom-12">
        <NavLink to="/logout">
          <div className="flex bg-special-bg3 px-4 py-3 rounded-md hover:text-white">
            <div className="mx-auto sm:mx-0">
              <Icon.Logout />
            </div>
            <div className="ms-3 hidden sm:block">Logout</div>
          </div>
        </NavLink>
        <div className="border-b my-10 border-b-special-bg"></div>
        <div className="flex justify-between">
          <div className="mx-auto sm:mx-0 self-center">
            <img src="images/profile.png" alt="profile" />
          </div>
          <div className="hidden sm:block">
            Username
            <br />
            View Profile
          </div>
          <div className="hidden sm:block self-center justify-self-end">
            <Icon.KebabMenu />
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
