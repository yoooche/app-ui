import axios from "axios";
import type { DataSourceResponse } from "../types/dataSourceTypes";

const API_BASE_URL = "http://localhost:8080/data-transform";

export const uploadFile = async (file: File):
    Promise<DataSourceResponse> => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post<DataSourceResponse>(
        `${API_BASE_URL}/upload`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );
    return response.data;
}