import { getMe } from '@/helpers/getMe';
import NavbarCard from './NavbarCard';
const Navbar = async () => {
  const user = await getMe();
  const userData = user?.data;
  return (
    <nav>
      <NavbarCard me={userData} />
    </nav>
  );
};

export default Navbar;
