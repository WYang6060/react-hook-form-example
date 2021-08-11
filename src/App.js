import './App.css';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState([]);

  const onSubmit = (data) => setResult([...result, JSON.stringify(data)]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('first name')} placeholder='First Name' />
      <input {...register('second name')} placeholder='Second Name' />
      <input {...register('phone number')} placeholder='Phone Number' />
      <select {...register('category')}>
        <option value=''>Select...</option>
        <option value='category A'>Category A</option>
        <option value='category B'>Category B</option>
      </select>

      <input type='submit' value='Submit' />

      <div>
        {result.map((value, idx) => <ul key={idx}>{value}</ul>)}
      </div>
    </form>
  );
}

export default App;
