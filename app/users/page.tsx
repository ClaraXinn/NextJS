
import UserTable from './UserTable'
import Link from 'next/link'


interface Props{
  searchParams: {sortOrder: string}
  
}


const UsersPage = async ( {searchParams : {sortOrder}}: Props ) => {
  console.log(sortOrder)

  return (
    <>
    <h1>Users</h1>
    <Link href="users/new" className='btn btn-active btn-secondary'> New User</Link>


        <UserTable sortOrder={sortOrder}/>

    

    

    </>
  )
}

export default UsersPage