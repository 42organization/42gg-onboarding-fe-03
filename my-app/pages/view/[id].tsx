import Axios from 'axios';
import { useRouter } from 'next/router'
import Item from '../../src/component/item';

const Post = ({ item }: any) => {
	return <>{item && <Item item={item} />} </>;
};

export async function getServerSideProps({context} : any) {
	const id = context.params.id;
	const apiUrl ='http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
	const res = await Axios.get(apiUrl);
	const data = res.data;

	return {
		props: {
			item: data
		},
	};
}

export default Post;