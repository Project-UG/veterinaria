import { Injectable } from '@angular/core';
import { FichaMedica } from '../types/fichaMedica';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class FichaMedicaService {
  url = 'http://localhost:3000/fichas-medicas';

  async getAll(): Promise<FichaMedica[]> {
    const response = await axios.get(this.url);
    return response.data;
  }

  async getById(id: number): Promise<FichaMedica> {
    const response = await axios.get(`${this.url}/${id}`);
    return response.data;
  }

  async getMany(id: number): Promise<FichaMedica[]> {
    const response = await axios.get(`${this.url}?historial_id=${id}`);
    return response.data;
  }

  async create(fichaMedica: FichaMedica): Promise<FichaMedica> {
    const response = await axios.post(this.url, fichaMedica);
    return response.data;
  }

  async update(id: number, fichaMedica: FichaMedica): Promise<FichaMedica> {
    const response = await axios.put(`${this.url}/${id}`, fichaMedica);
    return response.data;
  }

  async remove(id: number): Promise<void> {
    await axios.delete(`${this.url}/${id}`);
  }
}
