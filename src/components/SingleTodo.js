import React from 'react';

const SingleTodo = ({todo}) => {
    return (
        <div className='bg-gradient-to-r from-cyan-500 to-indigo-500  rounded-full'>
            <h1 className='p-3 font-serif text-lg text-white'>{todo.todo}</h1>
        </div>
    );
};

export default SingleTodo;