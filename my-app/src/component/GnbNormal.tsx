import { Menu } from "semantic-ui-react";
import {useRouter} from "next/router";
import { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import authAtom from "./authatom";

function Gnb(){
  const router = useRouter();
  const [auth, setAuth] = useRecoilState(authAtom);

  let activeItem;

  if (router.pathname === '/'){
    activeItem = "home";
  } else if (router.pathname === "/about") {
    activeItem = "about";
  } else if (router.pathname === "/product") {
    activeItem = "product";
  } else if (router.pathname === "/login") {
    activeItem = "login";
  }
  
  function handleItemClick(e: MouseEvent<HTMLAnchorElement>, {name} : {name?: string}){
    if(name === 'home'){
      router.push('/');
    } else if(name === 'about'){
      router.push('/about');
    } else if(name === 'product'){
      router.push('/product');
    } else if(name === 'profile'){
      router.push('/profile');
    } else if(name === 'logout'){
      setAuth("");
		  localStorage.setItem('auth', JSON.stringify(""));
      router.push('/login');
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
          name='profile'
          active={activeItem === 'profile'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='logout'
          active={activeItem === 'logout'}
          onClick={handleItemClick}
        />
      </Menu>
	)
}

export default Gnb;