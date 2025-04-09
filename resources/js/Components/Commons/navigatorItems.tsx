
const pageData = document.getElementById('app')?.dataset.page || '{}'
const pageObject = JSON.parse(pageData)
const translations = pageObject.props.translations

export const navigatorItems = [
    {
        id: 'order',
        text: translations.words.Order || 'Order',
        children: [
            { text: translations.words.OrderInput || 'Order Input' },
            { text: translations.words.OrderList || 'Order List' },
            { text: translations.words.OrderCancellation || 'Order Cancellation' }
        ]
    },
    {
        id: 'purchase',
        text: translations.words.Purchase || 'Purchase',
        children: [
            { text: translations.words.PurchaseDetailCreation || 'Purchase Detail Creation' },
            { text: translations.words.PurchaseList || 'Purchase List' },
            { text: translations.words.PurchaseCancellation || 'Purchase Cancellation' }
        ]
    },
    {
        id: 'arrival',
        text: translations.words.Arrival || 'Arrival',
        children: [
            { text: translations.words.ArrivedProductAllocation || 'Arrived Product Allocation' },
        ]
    },
    {
        id: 'shipping',
        text: translations.words.Shipping || 'Shipping',
        children: [
            { text: translations.words.DeliveryNoteCreation || 'Delivery Note Creation' },
        ]
    },
]