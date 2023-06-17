import { Injectable } from '@angular/core';
import { Paciente } from '../types/paciente';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  url = 'http://localhost:3000/pacientes';

  async getAll(): Promise<Paciente[]> {
    const response = await axios.get(this.url);
    return response.data;
  }

  async getById(id: number): Promise<Paciente> {
    const response = await axios.get(`${this.url}/${id}`);
    return response.data;
  }

  async getByNombre(nombre: string): Promise<Paciente[]> {
    const response = await axios.get(`${this.url}?nombre=${nombre}`);
    return response.data;
  }

  async create(paciente: Paciente): Promise<Paciente> {
    const response = await axios.post(this.url, paciente);
    return response.data;
  }

  async update(id: number, paciente: Paciente): Promise<Paciente> {
    const response = await axios.put(`${this.url}/${id}`, paciente);
    return response.data;
  }

  async remove(id: number): Promise<void> {
    await axios.delete(`${this.url}/${id}`);
  }
}
