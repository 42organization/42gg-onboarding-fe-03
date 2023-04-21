import { Grid, Image } from 'semantic-ui-react';
import styles from './ItemList.module.scss';
import Link from 'next/link';

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
	list: Product[];
}

function ItemList({list} : ItemListProps){
	return (
		<div>
		<Grid columns={3}>
			<Grid.Row>
			{list.map((item: Product) => (
					<Grid.Column key={item.id} >
						<Link href="/view/[id]" as={`/view/${item.id}`}>
						<div className={styles.wrap}>
							<Image
								src={item.image_link} 
								alt={item.name} 
								width={200} 
								height={200}
								className={styles.img_item}
							/>
							<strong className={styles.item_name}>{item.name}</strong>
							<span className={styles.item_info}>
								{item.category} {item.product_type}
							</span>
							<strong className={styles.item_price}> ${item.price}</strong>
						</div>
						</Link>
					</Grid.Column>
			))};
			</Grid.Row>
		</Grid>
	</div>
	)
}

export default ItemList;