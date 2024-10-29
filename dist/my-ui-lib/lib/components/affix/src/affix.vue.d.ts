import type { AffixProps } from './affix';
declare const _default: import("vue").DefineComponent<AffixProps | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<AffixProps>, Partial<AffixProps>>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    update: (content: string) => any;
}, string, import("vue").PublicProps, Readonly<AffixProps | import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<AffixProps>, Partial<AffixProps>>>> & Readonly<{
    onUpdate?: ((content: string) => any) | undefined;
}>, {
    content: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
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
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
