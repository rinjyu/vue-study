import {computed, reactive, toRefs} from 'vue';

const plusCalculator = () => {
    let state = reactive({
       number1: 0,
       number2: 0,
       result: computed(() => parseInt(state.number1) + parseInt(state.number2))
    });

    return toRefs(state);
};

export {
    plusCalculator
}