import { getMetadataArgsStorage } from "../../index";
import { ParamType } from "../../types/ParamType";

/**
 * Param object parameter decorator.
 *
 * @export
 * @returns {ParameterDecorator}
 */
export function ParamObj(): ParameterDecorator {
    return (target: Object, key: string | symbol, index: number) => {
        getMetadataArgsStorage().addParamMetadata({
            object: target,
            method: key as string,
            index: index,
            type: ParamType.ParamObj,
        });
    };
}
