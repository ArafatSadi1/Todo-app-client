import React, { useRef } from 'react';

const Todo = () => {
    const todoValue = useRef(null);
    const handleAddTodo = (e) =>{
        e.preventDefault()
        const todo = todoValue.current.value;
        console.log()
    }
    return (
        <div>
            <h1 className='text-center text-3xl py-4'>Todoist</h1>
            <form onSubmit={handleAddTodo} className='mx-auto relative w-3/5'>
                <input ref={todoValue} name='todoInput' type="text" placeholder='Enter a todo' className='input input-bordered input-primary w-full p-4 text-lg rounded-full' />
                <input type="submit" value="Add" className='btn btn-primary absolute right-0 rounded-full' />
            </form>
        </div>
    );
};

export default Todo;