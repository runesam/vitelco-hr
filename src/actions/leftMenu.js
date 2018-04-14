import { SET_LEFT_MENU_DATA } from '.'

export const getLeftMenuData = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type: SET_LEFT_MENU_DATA,
          payload: [
            {
              name: 'Administration',
              id: 'administrator',
              icon: 'fas fa-users',
              children: [
                {
                  id: 'authorization',
                  name: 'Authorization'
                },
                {
                  id: 'companyPosition',
                  name: 'Company Position'
                },
                {
                  id: 'user',
                  name: 'User'
                }
              ]
            },
            {
              name: 'Candidates/Positions',
              id: 'candidates/positions',
              icon: 'fas fa-map-marker',
              children: [
                {
                  id: 'candidates',
                  name: 'Candidates'
                },
                {
                  id: 'positions',
                  name: 'Positions'
                }
              ]
            }
          ]
        })
        resolve()
      }, 2000)
    })
  }
}

export default getLeftMenuData
