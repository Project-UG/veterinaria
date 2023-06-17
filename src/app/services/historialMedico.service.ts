import { Injectable } from '@angular/core';
import { HistorialMedico } from '../types/historialMedico';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class HistorialMedicoService {
  url = 'http://localhost:3000/historiales-medicos';

  async getAll(): Promise<HistorialMedico[]> {
    const response = await axios.get(this.url);
    return response.data;
  }

  async getById(id: number): Promise<HistorialMedico> {
    const response = await axios.get(`${this.url}/${id}`);
    return response.data;
  }

  async getByPropietarioId(id: number): Promise<HistorialMedico[]> {
    const response = await axios.get(`${this.url}?propietario_id=${id}`);
    return response.data;
  }

  async create(historialMedico: HistorialMedico): Promise<HistorialMedico> {
    const response = await axios.post(this.url, historialMedico);
    return response.data;
  }

  async update(
    id: number,
    historialMedico: HistorialMedico
  ): Promise<HistorialMedico> {
    const response = await axios.put(`${this.url}/${id}`, historialMedico);
    return response.data;
  }

  async remove(id: number): Promise<void> {
    await axios.delete(`${this.url}/${id}`);
  }
}
