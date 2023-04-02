/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Projects from '@/store/projects'
import Files from '@/store/files'
import Tasks from '@/store/tasks'
import Users from '@/store/users'
import Theme from '@/store/theme'
import Auth from '@/store/auth'

let projects: Projects
let files: Files
let tasks: Tasks
let users: Users
let theme: Theme
let auth: Auth

function initializeStores(store: Store<any>): void {
  projects = getModule(Projects, store)
  files = getModule(Files, store)
  tasks = getModule(Tasks, store)
  users = getModule(Users, store)
  theme = getModule(Theme, store)
  auth = getModule(Auth, store)
}

export { initializeStores, projects, files, tasks, users, theme, auth }