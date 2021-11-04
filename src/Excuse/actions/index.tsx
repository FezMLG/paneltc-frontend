export type Action = {type: 'ADD_EXCUSE', payload: string};

export const AddExcuse = (excuse: string): Action => {
  return {
    type: 'ADD_EXCUSE',
    payload: excuse
  }
}