interface RybbitConfig {
    analyticsHost: string;
    siteId: string;
    apiKey: string;
    debug?: boolean;
}
type PropertyValue = string | number | boolean;
interface TrackProperties {
    [key: string]: PropertyValue | PropertyValue[];
}
interface Payload {
    hostname?: string;
    pathname?: string;
    querystring?: string;
    screenWidth?: number;
    screenHeight?: number;
    language?: string;
    page_title?: string;
    referrer?: string;
    user_id?: string;
    user_agent?: string;
    ip_address?: string;
}
interface RybbitAPI {
    pageview: (payload?: Payload) => Promise<void>;
    event: (eventName: string, payload?: Payload, properties?: TrackProperties) => Promise<void>;
}

declare class Rybbit implements RybbitAPI {
    private readonly config;
    private readonly logger;
    /**
     * @param config - Configuration options.
     * @throws Error if the configuration is invalid.
     */
    constructor(config: RybbitConfig);
    /**
     * Tracks a pageview event.
     *
     * @param payload - Optional. An object containing data about the pageview.
     */
    pageview(payload?: Payload): Promise<void>;
    /**
     * Tracks a custom event.
     *
     * @param eventName - The name of the event.
     * @param payload - Optional. An object containing data about the event.
     * @param properties - Optional. An object containing additional data about the event.
     */
    event(eventName: string, payload?: Payload, properties?: TrackProperties): Promise<void>;
}

export { Rybbit };
