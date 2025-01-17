export type StaticData = {
    users: StaticUserData[];
    directors: StaticDirectorsData[];
    admins: StaticAdminsData[];
    cashiers: StaticCashierData[];
    generalDirector: StaticAllDirectorData[];
    semiDirector: StaticAllDirectorData[];
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

export type StaticAdminsData = {
    id: number,
    name: string
}

export type StaticCashierData = {
    id: number,
    name: string
}

export type StaticAllDirectorData = {
    id: 1,
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
    ],

    admins: [
        {
            id: 1,
            name: 'Иванова Мария'
        },
        {
            id: 2,
            name: 'Петров Иван'
        }
    ],

    cashiers: [
        {
            id: 1,
            name: 'Инна Лахтина'
        },
        {
            id: 3,
            name: 'Галина Сергеева'
        }
    ],
    generalDirector: [{
        id: 1,
        name: 'Виктор Леонидович'
    }],
    semiDirector: [{
        id: 1,
        name: 'Виктория Сергеевна'
    }]

};
