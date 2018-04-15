import { SET_LEFT_MENU_DATA, TOGGLE_LEFT_MENU_SIZE } from '.'


export const getLeftMenuData = () => (dispatch, getState) => new Promise((resolve) => {
    getState();
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
                            name: 'Authorization',
                        },
                        {
                            id: 'companyPosition',
                            name: 'Company Position',
                        },
                        {
                            id: 'user',
                            name: 'User',
                        },
                    ],
                },
                {
                    name: 'Candidates/Positions',
                    id: 'candidates/positions',
                    icon: 'fas fa-map-marker',
                    children: [
                        {
                            id: 'candidates',
                            name: 'Candidates',
                        },
                        {
                            id: 'positions',
                            name: 'Positions',
                        },
                    ],
                },
            ],
        })
        resolve()
    }, 2000)
});

export const toggleLeftMenuSize = () => ({ type: TOGGLE_LEFT_MENU_SIZE });

