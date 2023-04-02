export interface ProjectProps {
    id?: number
    projectName?: string
    projectSubTitle?: string
    createdAt?: string
    totalTask?: number
    totaltaskConcluded?: number
    totalFiles?: number
  
    tasks?: []
  
    files?: []
}

export const projects = [
    {
        id: 1,
        projectName: 'TESTE 1',
        projectSubTitle: 'teste',
        createdAt: 'Kleber',
        totalTask: 0,
        totaltaskConcluded: 0,
        totalFiles: 0,
      
        tasks: [],
        files: [],
    }
]