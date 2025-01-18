export type Response<T = undefined> = {
    status: string
    message?: string
    body: T
}