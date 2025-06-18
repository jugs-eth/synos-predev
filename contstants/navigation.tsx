export const navigation = [
    {
        title: "Dashboard",
        icon: "dashboard",
        href: "/",
    },
    {
        title: "Products",
        icon: "product-think",
        list: [
            {
                title: "Overview",
                href: "/products",
            },
            {
                title: "Drafts",
                href: "/products/drafts",
                counter: 2,
            },
            {
                title: "Released",
                href: "/products/released",
            },
            {
                title: "Comments",
                href: "/products/comments",
            },
            {
                title: "Scheduled",
                href: "/products/scheduled",
                counter: 8,
            },
        ],
    },
    {
        title: "Customers",
        icon: "profile",
        list: [
            {
                title: "Overview",
                href: "/customers",
            },
            {
                title: "Customer list",
                href: "/customers/customer-list",
            },
        ],
    },
    {
        title: "Shop",
        icon: "wallet",
        href: "/shop",
    },
    {
        title: "Income",
        icon: "income",
        list: [
            {
                title: "Earning",
                href: "/income/earning",
            },
            {
                title: "Refunds",
                href: "/income/refunds",
                counter: 3,
            },
            {
                title: "Payouts",
                href: "/income/payouts",
            },
            {
                title: "Statements",
                href: "/income/statements",
            },
        ],
    },
    {
        title: "Promote",
        icon: "promote",
        href: "/promote",
    },
];

export const navigationUser = [
    {
        title: "My shop",
        icon: "bag",
        href: "/shop",
    },
    {
        title: "Edit profile",
        icon: "edit-profile",
        href: "/settings",
    },
    {
        title: "Analytics",
        icon: "chart",
        href: "/customers",
    },
    {
        title: "Affiliate center",
        icon: "chain-think",
        href: "/affiliate-center",
    },
    {
        title: "Explore creators",
        icon: "grid",
        href: "/explore-creators",
    },
    {
        title: "Upgrade to Pro",
        icon: "star-fill",
        href: "/upgrade-to-pro",
    },
];
