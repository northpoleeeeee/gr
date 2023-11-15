"use client";

import { Edit, Trash } from "lucide-react";

export const columns = [
  {
    accessorKey: "nama",
    header: "NAMA LENGKAP",
  },
  {
    accessorKey: "no",
    header: "NO. HP",
  },
  {
    accessorKey: "tempat lahir",
    header: "TEMPAT LAHIR",
  },
  {
    accessorKey: "tgl",
    header: "TANGGAL LAHIR",
  },

  {
    accessorKey: "jenis",
    header: "JENIS KELAMIN",
  },

  {
    accessorKey: "alamat",
    header: "ALAMAT",
  },

  {
    accessorKey: "nama ayah",
    header: "NAMA AYAH",
  },

  {
    accessorKey: "nama ibu",
    header: "NAMA IBU",
  },


  {
    header: "TINDAKAN",
    cell: ({ row }) => {
      return (
        <div className="flex gap-x-4">
          <button type="button">
            <Edit />
          </button>

          <button type="button">
            <Trash />
          </button>
        </div>
      );
    },
  },
];
