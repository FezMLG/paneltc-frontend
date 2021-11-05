export type Action = {type: 'ADD_EXCUSE', payload: string};

export const AddExcuse = (excuse: string): Action => {
  return {
    type: 'ADD_EXCUSE',
    payload: excuse
  }
}

export const ListboxValue = ( value: any ) => {
  return {
    type: 'ADD_LIST_VALUE',
    payload: value
  }
}

export const InputValue = ( value: any ) => {
  return {
    type: 'ADD_INPUT_VALUE',
    payload: value
  }
}

export const UserNickname = ( nick: string ) => {
  return {
    type: 'ADD_NICKNAME',
    payload: nick
  }
}