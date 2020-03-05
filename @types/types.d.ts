
import { v4 as uuidv4 } from 'uuid'

export type Todo = {
  id: ReturnType<typeof uuidv4>;
  title: string;
}
