import { Button, Header, Image} from "semantic-ui-react";

interface Product {
	api_featured_image: string;
	brand: string;
	category: string | null;
	created_at: string;
	currency: string | null;
	description: string;
	id: number;
	image_link: string;
	name: string;
	product_type: string;
	price: string;
	price_sign: string | null;
	product_api_url: string;
}

interface ItemListProps {
	item: Array<Product>;
}

function Item({item} : ItemListProps) {
	const { image_link, name, price, description} = item;
	return (
		<>
			<div>
				<Image src={image_link} 
						alt={name} 
						width={200} 
						height={200}
						/>
			</div>
			<div>
				<strong>{name}</strong>
				<strong> ${price}</strong>
			</div>
			<Button color="orange">구매하기</Button>
			<Button>
				<p>{description}</p>
			</Button>
		</>
	);
}

export default Item;