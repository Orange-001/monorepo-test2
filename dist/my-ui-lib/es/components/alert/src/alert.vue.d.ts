import type { AlertProps } from './alert';
declare function __VLS_template(): {
    slots: {
        title?(_: {}): any;
    };
    refs: {};
    attrs: Partial<{}>;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<AlertProps | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<AlertProps>, Partial<AlertProps>>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (evt: MouseEvent) => any;
}, string, import("vue").PublicProps, Readonly<AlertProps | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<AlertProps>, Partial<AlertProps>>>> & Readonly<{
    onClose?: ((evt: MouseEvent) => any) | undefined;
}>, {
    type: "success" | "warning" | "info" | "error";
    title: string;
    closable: boolean;
    showIcon: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_PrettifyLocal<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
