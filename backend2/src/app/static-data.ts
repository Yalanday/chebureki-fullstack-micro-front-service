export type StaticData = {
    users: StaticUserData[];
    directors: StaticDirectorsData[];
}

export type StaticUserData = {
    id: number,
    label: string,
    name: string
}

export type StaticDirectorsData = {
    id: number,
    label: string,
    name: string
}



export const data: StaticData = {
    users: [
        {
            id: 1,
            label: 'directors',
            name: 'Директор'
        },
        {
            id: 2,
            label: 'admins',
            name: 'Администратор'
        },
        {
            id: 3,
            label: 'cashiers',
            name: 'Кассир'
        }
    ],

    directors: [
        {
            id: 1,
            label: 'general-director',
            name: 'Генеральный директор'
        },
        {
            id: 2,
            label: 'semi-director',
            name: 'Испольнительный директор'
        }
    ]
};
