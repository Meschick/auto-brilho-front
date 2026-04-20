export interface ApiResponse<T>{
    data: T[],
    currentPage: number,
    totalPages: number,
    totalCount: number
};