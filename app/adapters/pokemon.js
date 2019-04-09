import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
    pathForType(modelName) {
        return modelName;
    }
});