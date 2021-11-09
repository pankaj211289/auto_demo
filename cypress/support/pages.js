export const LOGIN = {
    route : "/",
    selectors : {
        loginForm : {
            usernameID : "user-name",
            passwordID : "password",
            loginButtonID : "login-button",
            errorContainerClass : "error-message-container"
        }
    }
};

export const INVENTORY = {
    route : "/inventory.html",
    selectors : {
        inventoryPage : {
            titleClass : "title",
            shoppingCardIconID : "shopping_cart_container",
            shoppingCartContainerID : "shopping_cart_container",
            menuButtonID : "react-burger-menu-btn",
            inventoryItemsClass : "inventory_item",
            inventoryItemsNameClass : "inventory_item_name",
            inventoryItemsPriceClass : "inventory_item_price",
            addToCartButtonClass : "btn_inventory",
            shoppingCartBadgeClass : "shopping_cart_badge",
            logoutLinkID : "logout_sidebar_link"
        }
    }
};

export const CART = {
    route : "/cart.html",
    selectors : {
        cartPage : {
            cartItemsClass : "cart_item",
            itemQuantity : "cart_quantity",
            inventoryItemNameClass : "inventory_item_name",
            cartRemoveButtonClass : "cart_button",
            checkoutButtonID : "checkout",
            continueShoppingButtonID : "continue-shopping"
        }
    }
};

export const CHECKOUT_STEP_ONE = {
    route : "/checkout-step-one.html",
    selectors : {
        checkoutStepOnePage : {
            firstNameID : "first-name",
            lastNameID : "last-name",
            postalCodeID : "postal-code",
            continueButtonID : "continue"
        }
    }
};

export const CHECKOUT_STEP_TWO = {
    route : "/checkout-step-two.html",
    selectors : {
        checkoutStepTwoPage : {
            cartItemsClass : "cart_item",
            itemQuantityClass : "cart_quantity",
            inventoryItemNameClass : "inventory_item_name",
            inventoryItemPriceClass : "inventory_item_price",
            summaryInfoClass : "summary_info",
            summarySubtotalClass : "summary_subtotal_label",
            summaryTaxClass : "summary_tax_label",
            summaryTotalClass : "summary_total_label",
            finishButtonID : "finish",
        }
    }
};

export const CHECKOUT_COMPLETE = {
    route : "/checkout-complete.html",
    selectors : {
        checkoutCompletePage : {
            completeHeaderClass : "complete-header",
            completeTextClass : "complete-text",
            backHomeID : "back-to-products"
        }
    }
};

