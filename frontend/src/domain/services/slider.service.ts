import apiClient from './api-client';

/**
 * Slider interface matching backend response
 */
export interface Slider {
  id: string;
  title?: string;
  description?: string;
  image_url: string;
  link_url?: string;
  order: number;
  status: string;
  created_at: string;
  updated_at: string;
}

/**
 * Slider access response
 */
export interface SliderResponse {
  items: Slider[];
}

/**
 * Slider Service
 */
export const sliderService = {
  /**
   * Get all public sliders
   */
  async getPublicSliders(): Promise<Slider[]> {
    const response = await apiClient.get<SliderResponse>('/v1/public/sliders');
    return response.data.items || [];
  },
};
