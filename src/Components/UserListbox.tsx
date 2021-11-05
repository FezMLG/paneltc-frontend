import { ChangeEvent, Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { SelectorIcon } from '@heroicons/react/solid'
import { ListboxValue } from '../Excuse/actions'
import { eventNames } from 'process'
import { useDispatch, useSelector } from 'react-redux';

// const ADMIN = {name: 'admin', color: 'bg-red-500'};
// const MOD = {name: 'moderator', color: 'bg-purple-500'};
// const HELPER = {name: 'helper', color: 'bg-blue-500'};

const AdminRanks = (rank: string) => {
  rank = rank.toLowerCase().trim();

  switch (rank) {
    case 'admin':
      return {name: 'admin', color: 'bg-red-500'};
    case 'moderator':
      return {name: 'moderator', color: 'bg-purple-500'};
    case 'helper':
      return {name: 'helper', color: 'bg-blue-500'};
    default:
      return {}
  }
}

export class Dataset {
  constructor(){
    // this.data = data;
  }
  reasons(){
    return {
      one: 'one', 
      two: 'two', 
      three: 'three'
    };
  }

  people(){
    return [
      { name: 'Wade Cooper', rank: 'admin' },
      { name: 'Arlene Mccoy', rank: 'admin' },
      { name: 'Devon Webb', rank: 'moderator' },
      { name: 'Tom Cook', rank: 'moderator' },
      { name: 'Tanya Fox', rank: 'helper' },
      { name: 'Hellen Schmidt', rank: 'helper' },
    ]
  }
}

const dataset = new Dataset();
const reasons = dataset.reasons();
const people = dataset.people();

function UserListbox(props: any) {
  const [selected, setSelected] = useState(people[0]);
  const dispatch = useDispatch();

  const handleSelect = (value: any) => {
    setSelected(value);
    dispatch(ListboxValue(selected));
  }
  

  return (
    <div className="w-72 mx-auto">
      <label className="block text-sm font-medium text-gray-500">
        { props.label }
      </label>
      <Listbox value={selected} onChange={handleSelect}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="z-10 absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={person}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`${
                          active ? 'text-amber-600' : 'text-amber-600'
                        } 
                        absolute inset-y-0 left-0 flex items-center pl-3 
                        ${
                          AdminRanks(person.rank).color ?? ''
                        }`}
                      >
                      </span>
                      <span
                        className={`${
                          selected ? 'font-medium' : 'font-normal'
                        } block truncate`}
                      >
                        {person.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default UserListbox;