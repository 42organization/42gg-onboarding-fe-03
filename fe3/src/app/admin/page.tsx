import { cookies } from 'next/headers'

export default function Home() {

    const userRole = cookies().get('Urole')?.value;

    if (userRole == "admin")
        return (
        <div>
            this is Admin Page
        </div>
        )

    return (
        <div>
            not Authorized
        </div>
    )
}