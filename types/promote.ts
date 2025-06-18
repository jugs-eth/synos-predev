export interface PublishedItem {
    id: number;
    title: string;
    image: string;
    socials: {
        icon: string;
        href: string;
    }[];
    likes: {
        counter: number;
        percentage: number;
    };
    views: {
        counter: number;
        percentage: number;
    };
    conversationRate: number;
}

export interface ScheduledItem {
    id: number;
    title: string;
    image: string;
    socials: {
        icon: string;
        href: string;
    }[];
    date: string;
}