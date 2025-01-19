export function formatNumber(num: number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function useFormatPriceValue(price: number, currentValute:string, cursDollar: number) {
    if (currentValute === 'dollar') {
        return (formatNumber(price) + ' $')
    } else {
        const rublNew = +(Number(price) * cursDollar).toFixed();
        return (formatNumber(rublNew) + ' ₽')
    }
}