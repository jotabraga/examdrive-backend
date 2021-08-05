export interface Tests{
    id: number,
    professorId: number,
    subjectId: number,
    categoryId: number,
    link: string,
    name: string
}

export interface TestBody{
    professorId: number,
    subjectId: number,
    categoryId: number,
    link: string,
    name: string
}