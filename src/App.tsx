import TodoList from './components/TodoList';
import { dummyData } from './data/todos';

const App = () => {
  return (
    <>
      <main className='py-10 h-screen'>
        <h1 className='font-bold text-3xl text-center'>Your Todo</h1>
        <div className='max-w-lg mx-auto'>
          <div className='space-y-2'>
            {dummyData.map((todo) => (
              <TodoList todo={todo} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
