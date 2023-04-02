import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { ProjectProps, projects } from '@/data';

@Module({
    name: 'projects',
    stateFactory: true,
    namespaced: true,
})

export default class Projects extends VuexModule {
    private projects = [] as ProjectProps[]
    private project = {} as ProjectProps

    public get $all() {
        return this.projects
    }

    public get $single() {
        return this.project
    }

    @Mutation
    private SET_ALL(data: ProjectProps[]){
        this.projects = data
    }

    @Mutation
    private SET_SINGLE(data: ProjectProps){
        this.project = data
    }

    @Action 
    public index(query: string) {
        let filterProjects = projects;
        // eslint-disable-next-line array-callback-return
        filterProjects = projects.filter(project => {
           return project.projectName.toLocaleLowerCase().includes(query.toLocaleLowerCase()); 
        })

        this.context.commit('SET_ALL', filterProjects);
    }

    @Action
    public create(payload: ProjectProps) {
        this.context.commit('SET_SINGLE', payload)
    } 

    @Action
    public upload(payload: ProjectProps) {
        this.context.commit('SET_SINGLE', payload)
    } 

    @Action
    public destroy() {
        this.context.commit('SET_SINGLE', null)
    } 
}