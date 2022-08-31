export type Document ={
    name: string,
    id: string,
    base_url: string,
    key: string,

}

export type CenterDetails = {
    name: string,
    id: string,
    policy: Array<Policy>
}

export type Policy = {
    name: string,
                text: string,
                fileId: Document,
                link: string,
                id: string
}