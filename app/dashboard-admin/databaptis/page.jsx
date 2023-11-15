import React from "react";
import DataTable from "../data-table";
import { columns } from "../columns";
import Header from "@/component/dashboard/Header";
const data = [
  {
    nama_lengkap: "John Doe",
    no_hp: 0,
    tempat_lahir: "indo",
    tanggal_lahir: "1",
    jenis_kelamin: "perempuan",
    nama_baptis: "John Doe xxx",
    alamat:"indo",
    nama_ayah:"jojo",
    nama_ibu:"ina",
  },
  {
    nama_lengkap: "John Doe",
    no_hp: 0,
    tempat_lahir: "indo",
    tanggal_lahir: "1",
    jenis_kelamin: "perempuan",
    nama_baptis: "John Doe xxx",
    alamat:"indo",
    nama_ayah:"jojo",
    nama_ibu:"ina",
  },
  {
    nama_lengkap: "John Doe",
    no_hp: 0,
    tempat_lahir: "indo",
    tanggal_lahir: "1",
    jenis_kelamin: "perempuan",
    nama_baptis: "John Doe xxx",
    alamat:"indo",
    nama_ayah:"jojo",
    nama_ibu:"ina",
  },
  {
    nama_lengkap: "John Doe",
    no_hp: 0,
    tempat_lahir: "indo",
    tanggal_lahir: "1",
    jenis_kelamin: "perempuan",
    nama_baptis: "John Doe xxx",
    alamat:"indo",
    nama_ayah:"jojo",
    nama_ibu:"ina",
  },
  {
    nama_lengkap: "John Doe",
    no_hp: 0,
    tempat_lahir: "indo",
    tanggal_lahir: "1",
    jenis_kelamin: "perempuan",
    nama_baptis: "John Doe xxx",
    alamat:"indo",
    nama_ayah:"jojo",
    nama_ibu:"ina",
  },
  {
    nama_lengkap: "John Doe",
    no_hp: 0,
    tempat_lahir: "indo",
    tanggal_lahir: "1",
    jenis_kelamin: "perempuan",
    nama_baptis: "John Doe xxx",
    alamat:"indo",
    nama_ayah:"jojo",
    nama_ibu:"ina",
  },
  {
    nama_lengkap: "John Doe",
    no_hp: 0,
    tempat_lahir: "indo",
    tanggal_lahir: "1",
    jenis_kelamin: "perempuan",
    nama_baptis: "John Doe xxx",
    alamat:"indo",
    nama_ayah:"jojo",
    nama_ibu:"ina",
  },
  {
    nama_lengkap: "John Doe",
    no_hp: 0,
    tempat_lahir: "indo",
    tanggal_lahir: "1",
    jenis_kelamin: "perempuan",
    nama_baptis: "John Doe xxx",
    alamat:"indo",
    nama_ayah:"jojo",
    nama_ibu:"ina",
  },
  {
    nama_lengkap: "John Doe",
    no_hp: 0,
    tempat_lahir: "indo",
    tanggal_lahir: "1",
    jenis_kelamin: "perempuan",
    nama_baptis: "John Doe xxx",
    alamat:"indo",
    nama_ayah:"jojo",
    nama_ibu:"ina",
  },
];

const page = () => {
  return (
    <main className="relative h-full min-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl w-full">
      <div className="w-full px-6 py-6 mx-auto">
        <Header />

        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
};

export default page;
