import ToDo from './ToDo';

interface User {
  id: string;
  name: string;
  auth: string;
  todo: ToDo[];
}

export default User;
