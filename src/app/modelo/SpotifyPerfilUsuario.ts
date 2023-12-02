export class SpotifyUserProfile {
    display_name: string | undefined;
    external_urls: external_urls | undefined;
    href: string | undefined;;
    id: string | undefined;;
    images: string[] | undefined;
    type: string | undefined;
    uri: string | undefined;
    followers: followers | undefined;
    country: string | undefined;
    product: string | undefined;
    explicit_content: explicit_content | undefined;
    email: string | undefined;
}

export class external_urls {
    spotify: string | undefined;
}
export class explicit_content {
    filter_enabled: boolean | undefined;
    filter_locked: boolean | undefined;
}
export class followers {
    href: string | undefined;
    total: number | undefined;
}