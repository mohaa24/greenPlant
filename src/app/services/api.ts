import axios from "axios";

// Base instance for API requests
const apiClient = axios.create({
  baseURL: "http://localhost:8080", // Replace with your API base URL
  headers: {
  
  },
});

    const AnalyseImage = async (formData:FormData) => {
      try {
          const response = await apiClient.post("/analyze", formData);
          return response.data;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        
      }
  
};

export default AnalyseImage;