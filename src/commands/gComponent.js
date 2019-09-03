module.exports = {
    name: 'generate:component',
    description: 'Create new component inside src/components',
    run: async toolbox => {
        const {
            parameters,
            template,
            print: { success, error }
        } = toolbox

        const name = parameters.first

        if(!name){
            error('Component name must be specified')
            return
        }

        await template.generate({
            template: 'component.js.ejs',
            target: `src/components/${name}.js`,
            props: { name }
        })

        success(`Generated ${name} component.`)
    }
};