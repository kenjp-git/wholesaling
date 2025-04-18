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
                {
                    text: translations.words.OrderInput || 'Order Input',
                    path: 'order/input'
                },
                {
                    text: translations.words.OrderList || 'Order List',
                    path: 'order/list'
                },
                {
                    text: translations.words.OrderCancellation || 'Order Cancellation',
                    path: 'order/cancellation'
                }
            ]
        },
        {
            id: 'purchase',
            text: translations.words.Purchase || 'Purchase',
            children: [
                {
                    text: translations.words.PurchaseDetailCreation || 'Purchase Detail Creation',
                    path: 'purchase/detail/create'
                },
                {
                    text: translations.words.PurchaseList || 'Purchase List',
                    path: 'purchase/list'
                },
                {
                    text: translations.words.PurchaseCancellation || 'Purchase Cancellation',
                    path: 'purchase/cancellation'
                }
            ]
        },
        {
            id: 'arrival',
            text: translations.words.Arrival || 'Arrival',
            children: [
                {
                    text: translations.words.ArrivedProductAllocation || 'Arrived Product Allocation',
                    path: 'arrival/product/allocation'
                },
            ]
        },
        {
            id: 'shipping',
            text: translations.words.Shipping || 'Shipping',
            children: [
                {
                    text: translations.words.DeliveryNoteCreation || 'Delivery Note Creation',
                    path: 'shipping/delivery/note/create'
                },
            ]
        },
    ]
}

export const navigatorItems = getNavigatorItems()