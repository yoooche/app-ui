import { useState } from "react";
import { uploadFile } from "../services/fileService";
import type { DataSourceResponse } from "../types/dataSourceTypes";

export const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [result, setResult] = useState<DataSourceResponse | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleSubmit = async () => {
        if (!selectedFile) {
            alert("Please select a file.");
            return;
        }

        try {
            const response = await uploadFile(selectedFile);
            setResult(response);
            alert("File uploaded successfully!");
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("Failed to upload file.");
        }
    };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc' }}>
            <h2>Upload Test</h2>

            {/* 檔案選擇器 */}
            <input type="file" onChange={handleFileChange} />

            {/* 上傳按鈕 */}
            <button onClick={handleSubmit} style={{ marginLeft: '10px' }}>
                Upload CSV
            </button>
            {/* 顯示結果 (如果有) */}
            {result && (
                <div style={{ marginTop: '20px', background: '#f0f0f0', padding: '10px' }}>
                    <h3>Return Result:</h3>
                    <pre>{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}