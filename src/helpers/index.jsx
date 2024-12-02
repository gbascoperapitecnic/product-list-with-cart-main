export function formatCurrency(quantity){
    return new Intl.NumberFormat('es-ES', {
        style: 'currency', currency: 'EUR'
    }).format(quantity)
}