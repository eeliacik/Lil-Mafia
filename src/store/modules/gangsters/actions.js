export default {
    saveGangster(context, formData) {
        const id = new Date().toISOString();
        formData.id = id;
        context.commit('addGangster', formData);
    },
    addJob(context, jobId) {
        const idData = {
            gangsterId: '001', // id of authenticated gangster.
            jobId: jobId
        };
        context.commit('addJob', idData);
    },
    removeJob(context, jobId) {
        const idData = {
            gangsterId: '001', // id of authenticated gangster.
            jobId: jobId
        };
        context.commit('removeJob', idData);
    },
};