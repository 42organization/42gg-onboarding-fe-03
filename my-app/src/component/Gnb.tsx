import { Menu } from "semantic-ui-react";
import {useRouter} from "next/Router";
import { MouseEvent } from "react";

interface datastring {
  name: string | undefined;
  active: boolean;
  onClick: () => void;
}

interface MenuItemProps {
  datastring : string[];
}

function Gnb(){
  const router = useRouter();
  let activeItem;

  if (router.pathname === '/'){
    activeItem = "home";
  } else if (router.pathname === "/about") {
    activeItem = "about";
  } else if (router.pathname === "/product") {
    activeItem = "product";
  } else if (router.pathname === "/users") {
    activeItem = "users";
  }
  
  function handleItemClick(e: MouseEvent<HTMLAnchorElement>, {name} : {name?: string}){
    console.log(e);
    if(name === 'home'){
      router.push('/');
    } else if(name === 'about'){
      router.push('/about');
    } else if(name === 'product'){
      router.push('/product');
    } else if(name === 'users'){
      router.push('/users');
    } else if(name === 'profile'){
      router.push('/profile');
    }
  }
	return (
		<Menu inverted>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='about'
          active={activeItem === 'about'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='product'
          active={activeItem === 'product'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='users'
          active={activeItem === 'users'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='profile'
          active={activeItem === 'profile'}
          onClick={handleItemClick}
        />
      </Menu>
	)
}

export default Gnb;