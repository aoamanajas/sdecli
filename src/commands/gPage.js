module.exports = {
    name: 'generate:page',
    description: 'Create new Page inside src/pages',
    run: async toolbox => {
        const {
            parameters,
            template,
            print: { success, error }
        } = toolbox

        const name = parameters.first

        if (!name) {
            error('Page name must be specified')
            return
        }

        await template.generate({
            template: 'page.js.ejs',
            target: `src/pages/${name}/index.js`,
            props: { name }
        })

        await template.generate({
            template: 'styles.js.ejs',
            target: `src/pages/${name}/styles.js`,
            props: { name }
        })

        success(`Generated ${name} page.`)
    }
};