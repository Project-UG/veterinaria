import { Injectable } from '@angular/core';
import { CitaMedica } from '../types/citaMedica';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class CitaMedicaService {
  url = 'http://localhost:3000/citas-medicas';

  async getAll(): Promise<CitaMedica[]> {
    const response = await axios.get(this.url);
    return response.data;
  }

  async getById(id: number): Promise<CitaMedica> {
    const response = await axios.get(`${this.url}/${id}`);
    return response.data;
  }

  async getByPaciente(paciente: string): Promise<CitaMedica[]> {
    const response = await axios.get(`${this.url}?paciente=${paciente}`);
    return response.data;
  }

  async getByHistorial(id: number): Promise<CitaMedica[]> {
    const response = await axios.get(`${this.url}?historial_id=${id}`);
    return response.data;
  }

  async create(citaMedica: CitaMedica): Promise<CitaMedica> {
    const response = await axios.post(this.url, citaMedica);
    return response.data;
  }

  async update(id: number, citaMedica: CitaMedica): Promise<CitaMedica> {
    const response = await axios.put(`${this.url}/${id}`, citaMedica);
    return response.data;
  }

  async remove(id: number): Promise<void> {
    await axios.delete(`${this.url}/${id}`);
  }
}
