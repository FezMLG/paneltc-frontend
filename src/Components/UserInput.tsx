import { useState } from "react";

interface UserInputProps {
  label?: string,
  type?: string,
  name?: string,
  id?: string,
  placeholder?: string,
  onChange?: any,
  value?: any
}

const UserInput = (props: UserInputProps) => {
  return (
    <div className="w-72 mx-auto">
      <label htmlFor={ props.name } className="block text-sm font-medium text-gray-500">
        { props.label }
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type={ props.type ?? 'text'}
          name={ props.name }
          id={ props.id ?? props.name}
          className="h-9 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-4 sm:text-sm border-gray-300 rounded-md"
          placeholder={ props.placeholder }
          onChange={ props.onChange }
        />
      </div>
    </div>
  )
}

export default UserInput;