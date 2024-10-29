export type AlertProps = {
    title?: string;
    type?: 'success' | 'warning' | 'info' | 'error';
    closable?: boolean;
    showIcon?: boolean;
};
export declare const AlertPropsDefaults: Partial<AlertProps>;
