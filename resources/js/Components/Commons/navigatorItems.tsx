// Description: This file contains the navigator items for the application.
// It retrieves the translations from the page data and constructs a list of items
// for the navigation menu. Each item has an ID, text, and a list of child items.

const getNavigatorItems = () => {
    const pageData = document.getElementById('app')?.dataset.page || '{}'
    const pageObject = JSON.parse(pageData)
    const translations = pageObject.props.translations

    return [
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
}

export const navigatorItems = getNavigatorItems()