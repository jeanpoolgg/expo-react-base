import type { User } from "../interfaces/reqres.response"

interface Props {
    user: User;
}


export const UserRow = ({ user }: Props) => {
    return (
        <tr className="p-2">
            <td>
                <img src={user.avatar} alt="User Avatar" className="rounded-full w-10 my-2 p2" />
            </td>
            <td>
                {user.first_name} {user.last_name}
            </td>
            <td>
                {user.email}
            </td>
        </tr>
    )
}
