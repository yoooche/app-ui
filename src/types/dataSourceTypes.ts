export interface DataSourceResponse {
    fileName: string;
    filePath: string;
    headers: DataSourceHeaders[];
}

export interface DataSourceHeaders {
    fileSource: string;
    headerName: string;
    type: string;
    example: any[];
}
