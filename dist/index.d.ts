// Generated by dts-bundle v0.7.3

declare module '@pgateway/common-services-api' {
    import { TCredentialProvider } from "@pgateway/common-services-api/interfaces";
    export function config(options: {
        endpoint: string;
        sign?: boolean;
        private?: boolean;
        host?: string;
        stage?: string;
        credentialProvider?: TCredentialProvider;
    }): Promise<void>;
    export function sendPushNotification(payload: any): any;
    export function sendEmail(payload: any): any;
    export function testApiGwConnection(): any;
    /**
      * Creates and send the request based on input params.
      *
      * Also auto-refetch credentials and make request again if request fails from server error (>=500) or forbidden (403) due to outdated credentials
      * @param path URL path of request
      * @param method HTTP method
      * @param payload JSON object to send
      * @param maxRetries number of retries before throwing
      * @param numberOfRetriesUsed used for recursively calling itself
      */
    export function createAndSendRequest(path: string, method: 'GET' | 'POST', payload?: any, maxRetries?: number, numberOfRetriesUsed?: number): any;
}

declare module '@pgateway/common-services-api/interfaces' {
    export type TCredentialProvider = 'ecs' | 'ec2-metadata' | 'credentials';
}

