import VueTransformNumber from './transform-number'

VueTransformNumber.install = function(Vue){
    Vue.component(VueTransformNumber.name,VueTransformNumber);
};
export default VueTransformNumber;