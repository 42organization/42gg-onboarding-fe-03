import { Icon } from 'semantic-ui-react';

function Error404() {
	return (
		<div style={{padding: "200px 0", textAlign: "center", fontSize: 30 }}>
			<Icon name="warning circle" color="red" />
			404: 요청한 페이지를 찾을 수 없습니다.
		</div>
	);
}

export default Error404;