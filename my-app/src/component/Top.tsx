import Image from 'next/image';
import Gnb from './Gnb';
function Footer () {
	return (
		<div>
			<div style={{ display: "flex"}}>
				<div style={{ flex: "0 0 0"}}>
					<Image
						src="/images/logo.png" 
						alt="logo" 
						width={80} 
						height={80}/>
				</div>
					<h1>Bookjeok Bookjeok</h1>
			</div>
					<Gnb />
		</div>
	);

}

export default Footer;