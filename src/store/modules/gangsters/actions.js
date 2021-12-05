export default {
    saveGangster(context, formData) {
        const id = new Date().toISOString();
        formData.id = id;
        context.commit('addGangster', formData);
    },
};