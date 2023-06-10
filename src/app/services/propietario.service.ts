import { Injectable } from '@angular/core';
import { Propietario } from '../types/propietario';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class PropietarioService {
  url = 'http://localhost:3000/propietarios';

  async getAll(): Promise<Propietario[]> {
    const response = await axios.get(this.url);
    return response.data;
  }

  async getById(id: number): Promise<Propietario> {
    const response = await axios.get(`${this.url}/${id}`);
    return response.data;
  }

  async create(propietario: Propietario): Promise<Propietario> {
    const response = await axios.post(this.url, propietario);
    return response.data;
  }

  async update(id: number, propietario: Propietario): Promise<Propietario> {
    const response = await axios.put(`${this.url}/${id}`, propietario);
    return response.data;
  }

  async remove(id: number): Promise<void> {
    await axios.delete(`${this.url}/${id}`);
  }
}
