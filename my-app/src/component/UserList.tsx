import React from "react";
import data from "../../data.json";
import Link from "next/link";

function UserList() {
	const user = data.users;

	return (
		<>
			<h1>Users</h1>
			<h2>User List</h2>
			<ol>
				{user.map(( users ) => (
					<li key={users.email}>
						<Link href="users/[pid]" as={`/users/${users.email}`} >{users.email}</Link>
					</li>
				))}
			</ol>
		</>
	);
}

export default UserList;