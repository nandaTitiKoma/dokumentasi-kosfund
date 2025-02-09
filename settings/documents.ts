import { Paths } from "@/lib/pageroutes";

export const Documents: Paths[] = [
  {
    title: "Projek Website Terintegrasi",
    href: "/navigation",
    heading: "Documents",
  },
  {
    title: "Pendahuluan",
    href: "/pendahuluan",
    items: [
      {
        title: "Deskripsi Projek",
        href: "/deskripsiprojek",
      },
      {
        title: "Teknologi yang Digunakan",
        href: "/teknologiyangdigunakan",
      },
      {
        title: "Keterkaitan Mata Kuliah",
        href: "/keterkaitanmatkul",
      },
    ],
  },
  {
    title: "Analisis dan Desain Perangkat Lunak",
    href: "/analisisdesain",
    items: [
      {
        title: "Analisis Kebutuhan",
        href: "/analisis_kebutuhan",
        items: [
          {
            title: "Business Requirement",
            href: "/business_requirement",
          },
          {
            title: "Stakeholder Requirement",
            href: "/stakeholder_requirement",
          },
          {
            title: "System Requirement",
            href: "/system_requirement",
          },
          {
            title: "Software Requirement",
            href: "/software_requirement",
          },
        ],
      },
      {
        title: "Diagram",
        href: "/diagram",
        items: [
          {
            title: "Use Case Diagram",
            href: "/use_case",
          },
          {
            title: "Class Diagram",
            href: "/class",
          },
          {
            title: "Flowchart",
            href: "/flowchart",
          },
        ],
      },
    ],
  },
  {
    title: "Perancangan dan Antarmuka",
    href: "/perancanganantarmuka",
    items: [
      {
        title: "Dokumen Desain",
        href: "/dokumen_desain",
        items: [
          {
            title: "Sketsa Awal",
            href: "/sketsa_awal",
          },
          {
            title: "Wireframe",
            href: "/wireframe",
          },
          {
            title: "Userflow",
            href: "/userflow",
          },
          {
            title: "Prototipe",
            href: "/prototipe",
          },
        ],
      },
      {
        title: "Implementasi Desain",
        href: "/implementasi_desain",
        items: [
          {
            title: "Kode Html, CSS, JavaScript",
            href: "/kode_html_css_js",
          },
        ],
      },
    ],
  },
  {
    title: "Pengembangan Aplikasi",
    href: "/pengembanganaplikasi",
    items: [
      {
        title: "Fitur Utama",
        href: "/fitur_utama",
        items: [
          {
            title: "Operasi CRUD",
            href: "/operasi_crud",
          },
          {
            title: "Fitur Login dan Registrasi",
            href: "/login_register",
          },
          {
            title: "Fitur Interaktif",
            href: "/fitur_interaktif",
          },
        ],
      },
      {
        title: "Struktur Basis Data",
        href: "/basis_data",
        items: [
          {
            title: "MYSQL",
            href: "/mysql",
          },
        ],
      },
      {
        title: "Metode SDLC",
        href: "/metode_sdlc",
        items: [
          {
            title: "Analisis Kebutuhan",
            href: "/analisis_kebutuhan",
          },
          {
            title: "Pembuatan Diagram UML",
            href: "/diagram_uml",
          },
          {
            title: "Pengembangan Kode dan Basis Data",
            href: "/kode_db",
          },
          {
            title: "Pengujian Fungsionalitas",
            href: "/pengujian_fungsionalitas",
          },
          {
            title: "Deployment",
            href: "/deploy",
          },
        ],
      },
    ],
  },
  {
    title: "Dokumentasi Penggunaan Website",
    href: "/dokumentasipenggunaan",
    items: [
      {
        title: "Panduan Penggunaan Website",
        href: "/panduan_penggunaan",
      },
    ],
  },
  {
    title: "Metode Pengembangan Perangkat Lunak",
    href: "/metodepengembangan",
    items: [
      {
        title: "Penjelasan Metode yang Digunakan",
        href: "/penjelasan_metode",
      },
      {
        title: "Alasan Memilih Metode",
        href: "/alasan_metode",
      },
      {
        title: "Implementasi Setiap Tahapan",
        href: "/implementasi_metode",
      },
    ],
  },
  {
    title: "Kesimpulan dan Saran",
    href: "/kesimpulan",
    items: [
      {
        title: "Evaluasi Projek",
        href: "/evaluasi_projek",
      },
      {
        title: "Rekomendasi Pengembangan Selanjutnya",
        href: "/rekomendasi_pengembangan_selanjutnya",
      },
    ],
  }
];
