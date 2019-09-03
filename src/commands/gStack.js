module.exports = {
    name: 'gstack',
    description: 'Teste de stack',
    run: async toolbox => {
        const {
            parameters,
            template,
            print: { success, error },
            filesystem
        } = toolbox

        const file = filesystem.read('src/templates/component.js.ejs', 'utf8')



        success()
    }
};