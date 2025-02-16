export type ItemsType = {
    id: number,
    name: string,
    price: number,
    quantity: number,
    category: string,
    description: string,
    image: string,
}

export interface ModalProps {
    selectedItem: ItemsType | null;
}
