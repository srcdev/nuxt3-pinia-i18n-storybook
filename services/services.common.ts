import useHttpClient from "@/composables/useHttpClient";

class CommonServices {
  async samplePost(payload: string) {
    const apiResponse = await useHttpClient.post<string>(`/api/common`, payload);
    return apiResponse;
  }
}

export default new CommonServices();
